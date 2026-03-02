import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../data/testimonials';
import { hotlistData } from '../data/hotlist';

const stats = [
    { number: '500+', label: 'Consultants Placed' },
    { number: '40–60', label: 'Daily Applications' },
    { number: '200+', label: 'Vendor Contacts' },
    { number: '95%', label: 'Client Satisfaction' },
];

const services = [
    { icon: '🎯', title: 'Bench Sales', desc: 'We actively market your profile to top vendors, implementation partners, and direct clients across the US.', link: '/bench-sales', tag: 'Most Popular' },
    { icon: '📋', title: 'Application Services', desc: '40–60 targeted job applications sent daily. ATS-optimized. Only $250/month.', link: '/applications', tag: '$250/month' },
    { icon: '🤝', title: 'US IT Recruiting', desc: 'End-to-end recruiting for C2C, W2, and Full-time requirements. Sourcing to placement.', link: '/recruiting', tag: 'C2C / W2 / FT' },
];

const whyUs = [
    { icon: '⚡', title: 'Fast Turnaround', desc: 'First interview within 7 days. We move urgently.' },
    { icon: '🌐', title: 'Vast Vendor Network', desc: '200+ active vendor contacts across the US.' },
    { icon: '📝', title: 'ATS Resume Experts', desc: 'Keyword-optimized resumes that pass every screener.' },
    { icon: '🔒', title: 'Total Transparency', desc: 'Daily updates — submissions, responses, interviews.' },
    { icon: '💼', title: 'All Visa Types', desc: 'OPT, H1B, GC, L1, EAD — we handle all authorizations.' },
    { icon: '📊', title: 'LinkedIn Tuning', desc: 'Profile optimized to attract top recruiters instantly.' },
];

const D = '#1B2540';      // dark navy
const M = '#4b5563';      // mid gray
const S = '#6b7280';      // subtle gray

export default function Home() {
    const [activeT, setActiveT] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setActiveT(p => (p + 1) % testimonialsData.length), 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="page-bg" style={{ paddingTop: '90px' }}>

            {/* ══ HERO ══ */}
            <section className="hero-bg" style={{ padding: '40px 0 80px', position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
                <div className="orb" style={{ width: '500px', height: '500px', top: '-80px', right: '-100px', background: 'radial-gradient(circle, rgba(191,59,45,0.1), transparent 70%)', animationDelay: '0s' }} />
                <div className="orb" style={{ width: '300px', height: '300px', bottom: '-40px', left: '-60px', background: 'radial-gradient(circle, rgba(27,37,64,0.07), transparent 70%)', animationDelay: '4s' }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

                        {/* Left */}
                        <div className="animate-fade-in-up">
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                                <span className="badge badge-primary">US IT Staffing Experts</span>
                                <span className="badge badge-green">✓ 500+ Placed</span>
                            </div>
                            <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(30px,4.5vw,54px)', color: D, lineHeight: '1.1', marginBottom: '22px', letterSpacing: '-0.5px' }}>
                                We Market Your Skills.<br />
                                <span className="text-gradient">We Get You Interviews.</span><br />
                                We Build Your Career.
                            </h1>
                            <p style={{ fontSize: '17px', color: M, lineHeight: '1.8', marginBottom: '16px' }}>
                                The fastest way for IT consultants in the US to go from bench to placement — expert bench sales, mass applications, and end-to-end recruiting.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '36px' }}>
                                {['OPT/CPT', 'H1B', 'Green Card', 'US Citizen', 'L1/L2 EAD', 'TN Visa'].map(v => (
                                    <span key={v} style={{ padding: '4px 12px', borderRadius: '20px', background: 'rgba(27,37,64,0.06)', color: M, fontSize: '12px', fontFamily: 'Inter', border: '1px solid rgba(27,37,64,0.1)' }}>{v}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn-primary animate-pulse-glow" style={{ fontSize: '15px', padding: '14px 28px' }}>Start Your Journey →</Link>
                                <Link to="/hotlist" className="btn-glass" style={{ fontSize: '15px', padding: '13px 27px' }}>View Bench Hotlist</Link>
                            </div>
                        </div>

                        {/* Right — Glass Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="animate-fade-in-up delay-200">
                            {stats.map((stat) => (
                                <div key={stat.label} className="glass" style={{ padding: '32px 20px', textAlign: 'center' }}>
                                    <div className="stat-number">{stat.number}</div>
                                    <div style={{ fontSize: '13px', color: S, fontFamily: 'Inter', marginTop: '8px', lineHeight: '1.4' }}>{stat.label}</div>
                                </div>
                            ))}
                            <div className="glass" style={{ gridColumn: '1/-1', padding: '22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', border: '1px solid rgba(191,59,45,0.15)' }}>
                                <div>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '15px', color: D }}>Application Services</div>
                                    <div style={{ fontSize: '13px', color: S, fontFamily: 'Inter' }}>40–60 daily applications for just $250/month</div>
                                </div>
                                <Link to="/applications" className="btn-primary" style={{ fontSize: '13px', padding: '9px 18px', whiteSpace: 'nowrap' }}>Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, transparent, #F5F0E8)', pointerEvents: 'none' }} />
            </section>

            {/* ══ SERVICES ══ */}
            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span className="badge badge-primary" style={{ marginBottom: '14px' }}>What We Offer</span>
                        <h2 className="section-title">Three Ways We Accelerate<br /><span className="text-gradient">Your US IT Career</span></h2>
                        <p className="section-subtitle" style={{ marginTop: '14px' }}>From marketing your profile to sending 60 applications daily — our services compress your timeline.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '24px' }}>
                        {services.map(s => (
                            <Link key={s.title} to={s.link} style={{ textDecoration: 'none' }}>
                                <div className="glass" style={{ padding: '36px 28px', height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,59,45,0.05), transparent)', pointerEvents: 'none' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                        <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(191,59,45,0.1)', border: '1px solid rgba(191,59,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>{s.icon}</div>
                                        <span className="badge badge-primary" style={{ fontSize: '11px' }}>{s.tag}</span>
                                    </div>
                                    <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20px', color: D, marginBottom: '12px' }}>{s.title}</h3>
                                    <p style={{ fontSize: '14.5px', color: M, lineHeight: '1.75', marginBottom: '20px' }}>{s.desc}</p>
                                    <span style={{ color: '#BF3B2D', fontWeight: '600', fontSize: '13.5px', fontFamily: 'Poppins', display: 'flex', alignItems: 'center', gap: '4px' }}>Learn More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ BENCH PREVIEW ══ */}
            <section style={{ padding: '0 0 88px' }}>
                <div className="container-custom">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <span className="badge badge-green" style={{ marginBottom: '8px' }}>● Available Now</span>
                            <h2 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: 'clamp(20px,3vw,32px)', color: D }}>Active Bench Candidates</h2>
                        </div>
                        <Link to="/hotlist" className="btn-glass">View Full Hotlist →</Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '16px' }}>
                        {hotlistData.slice(0, 4).map(c => (
                            <div key={c.id} className="glass-card" style={{ padding: '22px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg,#BF3B2D,#D4534A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', boxShadow: '0 4px 12px rgba(191,59,45,0.25)' }}>{c.name.charAt(0)}</div>
                                    <div>
                                        <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', color: D }}>{c.name}</div>
                                        <div style={{ fontSize: '12px', color: S, fontFamily: 'Inter' }}>{c.title}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                                    {c.skills.slice(0, 3).map(s => <span key={s} className="badge badge-primary" style={{ fontSize: '10px', padding: '3px 10px' }}>{s}</span>)}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '11px', color: S, fontFamily: 'Inter' }}>📍 {c.location}</span>
                                    <span className="badge badge-green" style={{ fontSize: '10px', padding: '3px 10px' }}>{c.availability}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ WHY US ══ */}
            <section style={{ padding: '88px 0', background: 'rgba(191,59,45,0.04)', borderTop: '1px solid rgba(191,59,45,0.08)', borderBottom: '1px solid rgba(191,59,45,0.08)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span className="badge badge-primary" style={{ marginBottom: '14px' }}>Why Nexora Pro</span>
                        <h2 className="section-title">The Unfair Advantage<br /><span className="text-gradient">for IT Consultants</span></h2>
                        <p className="section-subtitle" style={{ marginTop: '14px' }}>We don't just submit your resume — we own your placement campaign end-to-end.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '20px' }}>
                        {whyUs.map(item => (
                            <div key={item.title} className="glass-card" style={{ padding: '28px 24px' }}>
                                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', color: D, marginBottom: '8px' }}>{item.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7', fontFamily: 'Inter' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ TESTIMONIALS ══ */}
            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                        <span className="badge badge-primary" style={{ marginBottom: '14px' }}>Success Stories</span>
                        <h2 className="section-title">Real People. <span className="text-gradient">Real Placements.</span></h2>
                    </div>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <div className="glass-strong" style={{ padding: '48px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,59,45,0.06), transparent)', pointerEvents: 'none' }} />
                            <div style={{ fontSize: '52px', color: 'rgba(191,59,45,0.3)', fontFamily: 'Georgia', lineHeight: '1', marginBottom: '20px' }}>"</div>
                            <p style={{ fontSize: '16px', lineHeight: '1.85', color: M, fontFamily: 'Inter', marginBottom: '32px', fontStyle: 'italic', position: 'relative' }}>
                                {testimonialsData[activeT].text}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg,#BF3B2D,#D4534A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', boxShadow: '0 4px 16px rgba(191,59,45,0.25)' }}>
                                    {testimonialsData[activeT].avatar}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '15px', color: D }}>{testimonialsData[activeT].name}</div>
                                    <div style={{ fontSize: '13px', color: S, fontFamily: 'Inter' }}>{testimonialsData[activeT].role} • {testimonialsData[activeT].company}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
                            {testimonialsData.map((_, i) => (
                                <button key={i} onClick={() => setActiveT(i)} style={{ width: i === activeT ? '28px' : '8px', height: '8px', borderRadius: '4px', background: i === activeT ? '#BF3B2D' : 'rgba(27,37,64,0.15)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section style={{ padding: '88px 0', background: 'linear-gradient(135deg, #1B2540 0%, #2d3d60 100%)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(191,59,45,0.2), transparent 60%)', animationDelay: '0s' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge" style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}>🚀 Start Today</span>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(26px,4vw,46px)', color: '#fff', marginBottom: '18px', lineHeight: '1.15' }}>
                        Ready to Accelerate Your<br /><span className="text-gradient">US IT Career?</span>
                    </h2>
                    <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', maxWidth: '520px', margin: '0 auto 36px' }}>
                        Join 500+ consultants already getting placed through Nexora Pro's powerful bench sales and application engine.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn-white animate-pulse-glow" style={{ fontSize: '15px', padding: '15px 32px' }}>Free Consultation →</Link>
                        <Link to="/jobs" style={{ fontSize: '15px', padding: '14px 30px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', backdropFilter: 'blur(8px)', transition: 'all 0.3s', fontFamily: 'Poppins', fontWeight: '600' }}>Browse Open Jobs</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
