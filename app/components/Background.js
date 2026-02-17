'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null };
        let animId;

        const config = {
            particleCount: 55,
            maxRadius: 2.5,
            minRadius: 0.8,
            linkDistance: 130,
            speed: 0.35,
            mouseRadius: 160,
        };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const count = Math.min(config.particleCount, Math.floor((width * height) / 18000));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * config.speed,
                    vy: (Math.random() - 0.5) * config.speed,
                    radius: Math.random() * (config.maxRadius - config.minRadius) + config.minRadius,
                    opacity: Math.random() * 0.4 + 0.15,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Update & draw particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                p.x = Math.max(0, Math.min(width, p.x));
                p.y = Math.max(0, Math.min(height, p.y));

                if (mouse.x !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < config.mouseRadius) {
                        const force = ((config.mouseRadius - dist) / config.mouseRadius) * 0.015;
                        p.vx -= dx * force;
                        p.vy -= dy * force;
                    }
                }

                const maxV = config.speed * 1.5;
                p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
                p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity * 0.5})`;
                ctx.fill();
            });

            // Draw links
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < config.linkDistance) {
                        const opacity = 1 - dist / config.linkDistance;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.07})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(animate);
        }

        resize();
        createParticles();
        animate();

        const handleResize = () => { resize(); createParticles(); };
        const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} id="bgCanvas" />;
}
