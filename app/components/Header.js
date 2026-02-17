'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);

            // Scroll progress
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

            // Active section detection
            const sections = ['home', 'about', 'services', 'projects', 'contact'];
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const top = el.offsetTop - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3'
                    : 'bg-white/60 backdrop-blur-md py-5'
                }`}
        >
            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => scrollTo(e, '#home')}
                    className="text-2xl font-black tracking-tight group"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    <span className="inline-block group-hover:-rotate-3 transition-transform duration-300">Sma</span>
                    <span className="gradient-text inline-block group-hover:rotate-3 transition-transform duration-300">ran</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className={`text-sm font-medium transition-colors duration-200 relative group ${activeSection === link.href.slice(1) ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                                }`}
                        >
                            {link.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition relative"
                    aria-label="Toggle menu"
                >
                    <span className={`block absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                    <span className={`block absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {links.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollTo(e, link.href)}
                        className={`text-2xl font-semibold text-gray-700 hover:text-indigo-600 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms' }}
                    >
                        {link.label}
                    </a>
                ))}
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
