'use client';

import { useRef, useCallback } from 'react';

const projects = [
    {
        id: 1,
        title: 'SEO Campaign for AutoHub Nepal',
        team: 'AutoHub Nepal',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        date: '2024-01-15',
        description: 'Led a comprehensive SEO campaign that increased organic traffic by 250% in 6 months. Implemented technical SEO improvements and link building tactics.',
        tag: 'SEO',
    },
    {
        id: 2,
        title: 'eCommerce Growth for ShopNepal',
        team: 'ShopNepal',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        date: '2024-02-20',
        description: 'Multi-channel strategy combining Google Ads, Facebook Ads, and email marketing. Achieved 180% revenue increase and 35% lower CAC.',
        tag: 'eCommerce',
    },
    {
        id: 3,
        title: 'Social Media for TechVenture',
        team: 'TechVenture Pvt. Ltd.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        date: '2024-03-10',
        description: 'Built social media presence from scratch to 50K+ followers. 500% engagement increase and 200+ qualified leads monthly.',
        tag: 'Social',
    },
    {
        id: 4,
        title: 'Performance Ads for GearUp Sports',
        team: 'GearUp Sports',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
        date: '2024-04-05',
        description: 'Managed $50K monthly ad budget. Achieved 8x ROAS and reduced cost per acquisition by 60% through data-driven optimization.',
        tag: 'Ads',
    },
    {
        id: 5,
        title: 'Content Marketing for FoodieHub',
        team: 'FoodieHub',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
        date: '2024-05-12',
        description: 'Comprehensive content strategy including blogs, videos, and infographics. Grew traffic from 500 to 15K monthly visitors.',
        tag: 'Content',
    },
    {
        id: 6,
        title: 'Digital Transformation for Heritage Motors',
        team: 'Heritage Motors',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
        date: '2024-06-18',
        description: 'Complete digital marketing overhaul. 300% increase in showroom visits and 150% boost in test drive bookings.',
        tag: 'Strategy',
    },
];

function ProjectCard({ project, index }) {
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    }, []);

    return (
        <div
            ref={cardRef}
            className="reveal group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-indigo-50 cursor-default"
            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', transitionDelay: `${index * 80}ms` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop';
                    }}
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                    {project.tag}
                </span>
                {/* Featured badge */}
                <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Featured
                </span>
                {/* Overlay with slide-up effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                    <span className="text-white text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Details →
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {project.team}
                    </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-indigo-700 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative z-10 py-24 px-6 bg-white overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[3px] uppercase text-indigo-500">Recent Work</span>
                    <h2 className="text-3xl sm:text-4xl font-black mt-2 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        Projects &amp; Collaborations
                    </h2>
                    <div className="mx-auto mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
