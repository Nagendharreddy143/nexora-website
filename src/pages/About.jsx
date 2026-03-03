import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563';

const values = [
    { icon: '🎯', title: 'Laser Focus', desc: 'Every submission is targeted. No mass spray-and-pray.' },
    { icon: '🔒', title: '100% Transparency', desc: 'Daily updates. No black box. You always know what\'s happening.' },
    { icon: '⚡', title: 'Urgency First', desc: 'We treat your job search with the urgency it deserves.' },
    { icon: '🤝', title: 'Long-term Partners', desc: 'We invest in your career, not just your current placement.' },
];
const team = [
    { name: 'Srinivas Reddy', role: 'Founder & CEO', exp: '12+ years US IT Staffing' },
    { name: 'Priya Mehta', role: 'Head of Bench Sales', exp: '8+ years Vendor Marketing' },
    { name: 'Rahul Kumar', role: 'Lead Recruiter', exp: '10+ years US Recruiting' },
    { name: 'Ananya Singh', role: 'Application Specialist', exp: '5+ years ATS/Applications' },
];

export default function About() {
    return (
        <div className="page-bg home-pt">
            <section style={{ padding: '80px 0 64px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>About Us</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '20px', lineHeight: '1.1' }}>
                        Built by Staffing Pros<br /><span className="text-gradient">Who've Been There</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '580px' }}>
                        Nexora Pro Tech Systems was founded with one mission: to give IT consultants in the US a true partner in their placement journey — not just a vendor.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: '72px 0', borderBottom: '1px solid rgba(27,37,64,0.07)' }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '20px' }}>
                        {[{ n: '500+', l: 'Consultants Placed' }, { n: '200+', l: 'Vendor Network' }, { n: '40–60', l: 'Daily Applications' }, { n: '5+', l: 'Years in Business' }].map(s => (
                            <div key={s.l} className="glass" style={{ padding: '28px 20px', textAlign: 'center' }}>
                                <div className="stat-number">{s.n}</div>
                                <div style={{ fontSize: '13px', color: M, marginTop: '8px' }}>{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div className="glass" style={{ padding: '40px 32px', borderLeft: '4px solid #BF3B2D' }}>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', color: D, marginBottom: '16px' }}>Our Mission</h3>
                            <p style={{ color: M, lineHeight: '1.8', fontSize: '15px' }}>To be the most transparent, results-driven IT staffing partner for consultants and clients in the United States — delivering real placements, not promises.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px 32px', borderLeft: '4px solid #1B2540' }}>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', color: D, marginBottom: '16px' }}>Our Vision</h3>
                            <p style={{ color: M, lineHeight: '1.8', fontSize: '15px' }}>To be the #1 choice for IT consultants looking to maximize their earnings and career velocity in the US market through data-driven placement strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: '0 0 88px', background: 'rgba(191,59,45,0.04)', borderTop: '1px solid rgba(191,59,45,0.07)' }}>
                <div className="container-custom" style={{ paddingTop: '88px' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '52px' }}>Our <span className="text-gradient">Core Values</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '20px' }}>
                        {values.map(v => (
                            <div key={v.title} className="glass-card" style={{ padding: '28px 24px' }}>
                                <div style={{ fontSize: '32px', marginBottom: '14px' }}>{v.icon}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '17px', color: D, marginBottom: '10px' }}>{v.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '52px' }}>Meet the <span className="text-gradient">Team</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '20px' }}>
                        {team.map(t => (
                            <div key={t.name} className="glass-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg,#BF3B2D,#D4534A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(191,59,45,0.25)' }}>{t.name.charAt(0)}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', color: D, marginBottom: '6px' }}>{t.name}</h3>
                                <div style={{ fontSize: '13px', color: '#BF3B2D', fontWeight: '600', marginBottom: '6px' }}>{t.role}</div>
                                <div style={{ fontSize: '12px', color: M }}>{t.exp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #1B2540 0%, #2d3d60 100%)' }}>
                <div className="container-custom" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(24px,3.5vw,40px)', color: '#fff', marginBottom: '16px' }}>Let's Build Your Career Together</h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '32px', maxWidth: '420px', margin: '0 auto 32px' }}>Reach out today and start your journey with Nexora Pro.</p>
                    <Link to="/contact" className="btn-white" style={{ fontSize: '15px', padding: '14px 32px' }}>Contact Us →</Link>
                </div>
            </section>
        </div>
    );
}
