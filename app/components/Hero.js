'use client';

import { useState, useEffect, useRef } from 'react';

const roles = [
    'Digital Marketing Executive',
    'Business Growth Strategist',
    'SEO & Performance Expert',
    'eCommerce Growth Specialist',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const heroRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 30 : 60;
        const pauseEnd = 2000;
        const pauseStart = 500;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), pauseEnd);
                }
            } else {
                setDisplayText(currentRole.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), pauseStart);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    // Entrance animation trigger
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Magnetic button effect
    const handleMagnet = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    };

    const resetMagnet = (e) => {
        e.currentTarget.style.transform = 'translate(0, 0) scale(1)';
    };

    return (
        <section id="home" ref={heroRef} className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
            {/* Floating shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-200/15 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
                <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-pink-200/10 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
            </div>

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text — staggered entrance */}
                <div className="order-2 md:order-1">
                    {/* Badge */}
                    <span
                        className={`inline-block text-xs font-semibold tracking-[3px] uppercase text-indigo-500 bg-indigo-50 px-4 py-1.5 rounded-full mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                    >
                        Welcome to my portfolio
                    </span>

                    {/* Name — split letter animation */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                            Smaran
                        </span>{' '}
                        <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                            Basnet
                        </span>
                    </h1>

                    {/* Typing tagline */}
                    <p
                        className={`text-lg sm:text-xl font-medium text-gray-500 mb-3 h-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <span>{displayText}</span>
                        <span className="inline-block w-0.5 h-5 bg-indigo-500 ml-0.5 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
                    </p>

                    {/* Description */}
                    <p
                        className={`text-base text-gray-400 leading-relaxed max-w-md mb-8 transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Digital Marketing Executive at BYDBhaktapur with 3+ years of experience helping automobile and eCommerce businesses grow through performance marketing, SEO, and data-driven strategies.
                    </p>

                    {/* CTA Buttons with magnetic effect */}
                    <div
                        className={`flex flex-wrap gap-3 transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <a
                            href="#contact"
                            onMouseMove={handleMagnet}
                            onMouseLeave={resetMagnet}
                            className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                            <span className="relative">Hire Me</span>
                            <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a
                            href="#services"
                            onMouseMove={handleMagnet}
                            onMouseLeave={resetMagnet}
                            className="group inline-flex items-center gap-2 px-7 py-3 border-2 border-indigo-200 text-indigo-600 font-semibold text-sm rounded-full hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-indigo-100/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                            <span className="relative">See Services</span>
                        </a>
                    </div>
                </div>

                {/* Round Photo with enhanced animation */}
                <div
                    className={`flex justify-center order-1 md:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                >
                    <div className="relative group cursor-pointer">
                        {/* Morphing glow */}
                        <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700" style={{ animation: 'morph 8s ease-in-out infinite, gradient-shift 6s ease infinite', backgroundSize: '200% 200%' }} />
                        {/* Rotating ring */}
                        <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-indigo-200/40" style={{ animation: 'spin-slow 20s linear infinite' }} />
                        {/* Pulse ring */}
                        <div className="absolute inset-[-8px] rounded-full border-2 border-indigo-200 opacity-40" style={{ animation: 'pulse-ring 3s ease-in-out infinite' }} />
                        {/* Photo */}
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-100 animate-float group-hover:shadow-indigo-200 transition-shadow duration-500">
                            <img
                                src="/images/image.png"
                                alt="Smaran Basnet"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Smaran+Basnet&size=400&background=6366f1&color=fff&bold=true&font-size=0.4';
                                }}
                            />
                        </div>
                        {/* Floating badges */}
                        <div className="absolute -right-2 top-8 bg-white rounded-xl shadow-lg px-3 py-2 border border-indigo-100" style={{ animation: 'float 4s ease-in-out infinite' }}>
                            <span className="text-xl">🚀</span>
                        </div>
                        <div className="absolute -left-4 bottom-16 bg-white rounded-xl shadow-lg px-3 py-2 border border-purple-100" style={{ animation: 'float 5s ease-in-out infinite reverse' }}>
                            <span className="text-xl">📈</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
