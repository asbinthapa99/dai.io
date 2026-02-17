'use client';

import { useEffect, useRef } from 'react';

const stats = [
    { platform: 'LinkedIn', count: '24', label: 'Connections', countSuffix: '', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', href: 'https://www.linkedin.com/in/smaran-basnet-475a90254/' },
    { platform: 'Instagram', count: '2.2K', label: 'Followers', countSuffix: '', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z', color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100', href: 'https://instagram.com/' },
    { platform: 'Twitter', count: '1.5K', label: 'Followers', countSuffix: '', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z', color: 'text-sky-500', bg: 'bg-sky-50', border: 'border-sky-100', href: 'https://twitter.com/' },
    { platform: 'Facebook', count: '2.8K', label: 'Followers', countSuffix: '', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100', href: 'https://facebook.com/' },
];

function CountUp({ target }) {
    const ref = useRef(null);
    const animated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;
                    const targetStr = target;
                    const isK = targetStr.includes('K');
                    const numVal = parseFloat(targetStr.replace('K', ''));

                    if (isK) {
                        // Animate K values: 0.0 -> 2.2K
                        const finalVal = numVal;
                        const duration = 1800;
                        const steps = duration / 16;
                        const inc = finalVal / steps;
                        let curr = 0;
                        const update = () => {
                            curr += inc;
                            if (curr < finalVal) {
                                el.textContent = curr.toFixed(1) + 'K';
                                requestAnimationFrame(update);
                            } else {
                                el.textContent = targetStr;
                            }
                        };
                        update();
                    } else {
                        // Animate plain numbers: 0 -> 24
                        const finalVal = parseInt(numVal);
                        const duration = 1500;
                        const steps = duration / 16;
                        const inc = finalVal / steps;
                        let curr = 0;
                        const update = () => {
                            curr += inc;
                            if (curr < finalVal) {
                                el.textContent = Math.floor(curr);
                                requestAnimationFrame(update);
                            } else {
                                el.textContent = targetStr;
                            }
                        };
                        update();
                    }
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>0</span>;
}

export default function SocialStats() {
    return (
        <section id="socials" className="relative z-10 py-20 px-6 bg-gray-50/70">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold tracking-[3px] uppercase text-indigo-500">My Reach</span>
                    <h2 className="text-3xl sm:text-4xl font-black mt-2 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        Connect With Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <a
                            key={s.platform}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`reveal group relative bg-white rounded-2xl p-5 border ${s.border} hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <svg className={`w-5 h-5 ${s.color}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d={s.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{s.platform}</p>
                                    <p className="text-2xl font-black gradient-text leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                        <CountUp target={s.count} />
                                    </p>
                                    <p className="text-xs text-gray-400">{s.label}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
