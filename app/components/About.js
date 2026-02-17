const skills = [
    { name: 'Performance Marketing', icon: '🚀' },
    { name: 'SEO & Content Strategy', icon: '📈' },
    { name: 'Google & Meta Ads', icon: '🎯' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'eCommerce Growth', icon: '🛒' },
    { name: 'Graphic Design', icon: '🎨' },
];

const highlights = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Done' },
    { number: '250%', label: 'Avg Traffic Growth' },
];

export default function About() {
    return (
        <section id="about" className="relative z-10 py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[3px] uppercase text-indigo-500">Get to know me</span>
                    <h2 className="text-3xl sm:text-4xl font-black mt-2 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        About Me
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <div className="reveal">
                        <p className="text-gray-500 leading-relaxed text-base mb-5">
                            I&apos;m a Digital Marketing Executive at <strong className="text-gray-700">BYDBhaktapur (B. Mai Automobiles Pvt. Ltd.)</strong> with
                            3+ years of experience specializing in helping automobile and eCommerce businesses grow through
                            performance marketing, SEO, and data-driven strategies.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-base mb-4">
                            Previously served as a <strong className="text-gray-700">Tech Support &amp; Graphic Designer at Classic Tech</strong>,
                            where I combined technical expertise with creative design skills.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-base mb-8">
                            Holding a <strong className="text-gray-700">Bachelor of Social Work (BSW)</strong> from
                            Orchid International College (Tribhuvan University), I bring a unique blend of
                            social understanding and digital expertise to every project.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {highlights.map((h) => (
                                <div key={h.label} className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                                    <p className="text-2xl sm:text-3xl font-black gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {h.number}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1 font-medium">{h.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="reveal grid grid-cols-2 gap-3">
                        {skills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                <span className="text-xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
