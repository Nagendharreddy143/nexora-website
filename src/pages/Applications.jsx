import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563'; const S = '#6b7280';

const features = [
    { icon: '📋', title: '40–60 Daily Applications', desc: 'Our team manually applies to 40–60 targeted job openings every day — keeping your pipeline constantly full.' },
    { icon: '🎯', title: 'ATS-Optimized Resume', desc: 'We rewrite and optimize your resume to pass ATS filters and attract recruiter attention instantly.' },
    { icon: '💼', title: 'LinkedIn Optimization', desc: 'Full LinkedIn profile overhaul with keyword-rich headline, summary, and endorsements.' },
    { icon: '📊', title: 'Weekly Reports', desc: 'Every Friday you receive a detailed report of all applications, platforms used, and responses received.' },
    { icon: '💡', title: 'Job Board Coverage', desc: 'We apply across LinkedIn, Indeed, Dice, Monster, and 20+ niche IT boards simultaneously.' },
    { icon: '🤝', title: 'Dedicated Account Manager', desc: 'A real person manages your account, answers questions, and adapts strategy based on results.' },
];

const faqs = [
    { q: 'When do I start getting applications?', a: 'Within 48 hours of signing up, our team begins applying daily.' },
    { q: 'Can I track which jobs you applied to?', a: 'Yes — you receive a weekly report with all application details.' },
    { q: 'Do you apply to remote jobs only?', a: 'We apply to both remote and hybrid, based on your preferences.' },
    { q: 'What if I get an interview call?', a: 'We coach you and help coordinate scheduling with the hiring team.' },
];

export default function Applications() {
    return (
        <div className="page-bg home-pt">
            <section style={{ padding: '80px 0 64px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>Application Services</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '20px', lineHeight: '1.1' }}>
                        40–60 Applications Daily<br /><span className="text-gradient">While You Sleep</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '560px', marginBottom: '32px' }}>
                        Just $250/month. Our team fills out every application manually — ATS-optimized, targeted, and tracked for you.
                    </p>
                    <Link to="/contact" className="btn-primary animate-pulse-glow" style={{ fontSize: '15px', padding: '14px 28px' }}>Start for $250/month →</Link>
                </div>
            </section>

            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <h2 className="section-title">Everything <span className="text-gradient">Included</span></h2>
                        <p className="section-subtitle" style={{ marginTop: '14px' }}>All features included in the flat $250/month plan — no hidden fees.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '20px' }}>
                        {features.map(f => (
                            <div key={f.title} className="glass" style={{ padding: '28px 24px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(191,59,45,0.1)', border: '1px solid rgba(191,59,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>{f.icon}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '17px', color: D, marginBottom: '10px' }}>{f.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Card */}
            <section style={{ padding: '0 0 88px' }}>
                <div className="container-custom" style={{ maxWidth: '520px' }}>
                    <div className="glass-strong" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(27,37,64,0.12)' }}>
                        <div style={{ padding: '6px', background: 'linear-gradient(135deg,#BF3B2D,#D4534A)' }}>
                            <div style={{ textAlign: 'center', padding: '4px', color: 'rgba(255,255,255,0.9)', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', letterSpacing: '1px' }}>MOST POPULAR PLAN</div>
                        </div>
                        <div style={{ padding: '40px 36px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                                <div style={{ fontSize: '52px', fontFamily: 'Poppins', fontWeight: '900', color: D }}>$250<span style={{ fontSize: '18px', fontWeight: '500', color: S }}>/month</span></div>
                                <div style={{ color: S, fontSize: '14px', marginTop: '4px' }}>Cancel anytime · No setup fee</div>
                            </div>
                            {['40–60 daily job applications', 'ATS-optimized resume', 'LinkedIn profile optimization', 'Weekly reports', 'Dedicated account manager', 'Interview coordination support'].map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(191,59,45,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BF3B2D', fontSize: '12px', flexShrink: 0 }}>✓</div>
                                    <span style={{ fontSize: '14px', color: M }}>{item}</span>
                                </div>
                            ))}
                            <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '28px', padding: '14px', fontSize: '15px' }}>Get Started →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '0 0 88px' }}>
                <div className="container-custom" style={{ maxWidth: '700px' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked <span className="text-gradient">Questions</span></h2>
                    {faqs.map((f, i) => (
                        <div key={i} className="glass-card" style={{ padding: '24px', marginBottom: '14px' }}>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '15px', color: D, marginBottom: '8px' }}>{f.q}</h3>
                            <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
