'use client';

import { useRef, useCallback } from 'react';

const services = [
    {
        title: 'Digital Marketing Strategy',
        desc: 'End-to-end strategies aligned with business goals and ROI. Comprehensive marketing plans that drive measurable results.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        title: 'SEO & Organic Growth',
        desc: 'Technical SEO, content optimization, and traffic growth. Boost your rankings and organic visibility.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        title: 'Performance Marketing',
        desc: 'Google & Meta Ads focused on conversions and ROAS. Data-driven campaigns that deliver measurable results.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        title: 'eCommerce Marketing',
        desc: 'Specialized strategies for online stores. Increase sales, reduce cart abandonment, and maximize customer lifetime value.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        ),
    },
    {
        title: 'Analytics & Reporting',
        desc: 'Track, measure, and optimize. Get detailed insights into your marketing performance with actionable recommendations.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
        ),
    },
    {
        title: 'Social Media Management',
        desc: 'Build engaged communities and drive conversions through strategic social media marketing across all platforms.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

function TiltCard({ children, className, style }) {
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

        // Move gradient highlight
        const shine = card.querySelector('.card-shine');
        if (shine) {
            shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08) 0%, transparent 60%)`;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        const shine = card.querySelector('.card-shine');
        if (shine) shine.style.background = 'transparent';
    }, []);

    return (
        <div
            ref={cardRef}
            className={className}
            style={{ ...style, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-shine absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300" />
            {children}
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative z-10 py-24 px-6 bg-gray-50/70 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[3px] uppercase text-indigo-500">What I Offer</span>
                    <h2 className="text-3xl sm:text-4xl font-black mt-2 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        My Services
                    </h2>
                    <div className="mx-auto mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((s, i) => (
                        <TiltCard
                            key={s.title}
                            className="reveal group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 overflow-hidden cursor-default"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {/* Animated border gradient on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 50%, rgba(236,72,153,0.1) 100%)' }} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-indigo-200">
                                    {s.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {s.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-700 group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
