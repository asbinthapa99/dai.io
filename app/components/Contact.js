'use client';

import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            await fetch('https://formspree.io/f/xwvnvwkk', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });
            setSubmitted(true);
            form.reset();
            setTimeout(() => setSubmitted(false), 4000);
        } catch {
            // Fallback
            setSubmitted(true);
            form.reset();
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <section id="contact" className="relative z-10 py-24 px-6 bg-gray-50/70">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[3px] uppercase text-indigo-500">Get In Touch</span>
                    <h2 className="text-3xl sm:text-4xl font-black mt-2 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        Contact Me
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Info */}
                    <div className="reveal">
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Ready to grow your business? Let&apos;s discuss how I can help you achieve your marketing goals.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
                                    label: 'Email',
                                    value: 'smaran@example.com',
                                    href: 'mailto:smaran@example.com',
                                },
                                {
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                                    label: 'Phone',
                                    value: '+977-9800000000',
                                    href: 'tel:+977-9800000000',
                                },
                                {
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                                    label: 'Location',
                                    value: 'Bhaktapur, Nepal',
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all duration-300">
                                    <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">{item.value}</a>
                                        ) : (
                                            <p className="text-sm text-gray-700">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Collaboration */}
                        <div className="mt-6 p-4 bg-white rounded-xl border-l-3 border border-gray-100" style={{ borderLeftWidth: '3px', borderLeftColor: '#6366f1' }}>
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">In collaboration with</p>
                            <a href="https://asbinthapa.info.np" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                                Asbin Thapa
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="reveal">
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/xwvnvwkk" method="POST" className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                            {['name', 'email', 'subject'].map((field) => (
                                <div key={field}>
                                    <label htmlFor={field} className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                        {field === 'name' ? 'Your Name' : field === 'email' ? 'Your Email' : 'Subject'}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        id={field}
                                        name={field}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                                        placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'How can I help?'}
                                    />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-y"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                            </button>
                            {submitted && (
                                <p className="text-center text-sm text-green-600 font-medium animate-fade-in-up">
                                    ✅ Message sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
