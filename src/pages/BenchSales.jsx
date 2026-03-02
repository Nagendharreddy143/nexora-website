import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563'; const S = '#6b7280';

const services = [
    { icon: '📄', title: 'Resume Marketing', desc: 'We craft and market your resume to 200+ vendors, direct clients, and implementation partners.' },
    { icon: '📧', title: 'Vendor Submissions', desc: '100+ targeted submissions per week to active C2C, W2, and direct requirements across the US.' },
    { icon: '📅', title: 'Interview Scheduling', desc: 'We coordinate with vendors on your behalf — you show up, we set it up.' },
    { icon: '🤝', title: 'Placement Support', desc: 'Offer negotiation, rate guidance, and onboarding assistance until you start.' },
    { icon: '🔄', title: 'Ongoing Marketing', desc: 'Until your contract ends, we proactively market you for your next role.' },
    { icon: '📊', title: 'Daily Reporting', desc: 'Transparency on every submission — vendor name, position, status, and feedback.' },
];
const process = [
    { step: '1', title: 'Profile Setup', desc: 'We audit your resume, optimize it for the US market, and create your bench profile.' },
    { step: '2', title: 'Market Research', desc: 'We identify active requirements matching your skills and rates in your preferred locations.' },
    { step: '3', title: 'Daily Marketing', desc: 'Your profile goes out to 20+ vendors daily — calls, emails, and LinkedIn outreach.' },
    { step: '4', title: 'Interview Prep', desc: 'We prep you for technical and HR rounds with tailored coaching and mock interviews.' },
];
const visaTypes = [
    { type: 'OPT/CPT', color: '#0ea5e9' }, { type: 'H1B', color: '#BF3B2D' },
    { type: 'Green Card', color: '#16a34a' }, { type: 'US Citizen', color: '#7c3aed' }, { type: 'L1/EAD', color: '#d97706' },
];

export default function BenchSales() {
    return (
        <div className="page-bg" style={{ paddingTop: '90px' }}>
            <section style={{ padding: '80px 0 64px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>Bench Sales</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(30px,4.5vw,52px)', color: D, marginBottom: '20px', lineHeight: '1.1' }}>
                        We Market Your Profile<br /><span className="text-gradient">To Get You Placed Fast</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '580px', marginBottom: '36px' }}>
                        End-to-end bench sales support — from resume marketing to offer negotiation. We handle everything so you can focus on interviews.
                    </p>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>Get Started →</Link>
                        <Link to="/hotlist" className="btn-glass" style={{ fontSize: '15px', padding: '13px 27px' }}>View Hotlist</Link>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
                        {visaTypes.map(v => <span key={v.type} className="badge" style={{ background: `${v.color}15`, color: v.color, border: `1px solid ${v.color}30`, fontSize: '12px' }}>{v.type}</span>)}
                    </div>
                </div>
            </section>

            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span className="badge badge-primary" style={{ marginBottom: '14px' }}>What's Included</span>
                        <h2 className="section-title">Complete Bench Sales <span className="text-gradient">Service Package</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '20px' }}>
                        {services.map(s => (
                            <div key={s.title} className="glass" style={{ padding: '28px 24px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(191,59,45,0.1)', border: '1px solid rgba(191,59,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>{s.icon}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '17px', color: D, marginBottom: '10px' }}>{s.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '0 0 88px' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <h2 className="section-title">How We <span className="text-gradient">Work Together</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
                        {process.map(p => (
                            <div key={p.step} className="glass-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="step-number">{p.step}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '17px', color: D }}>{p.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #1B2540 0%, #2d3d60 100%)' }}>
                <div className="container-custom" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(24px,3.5vw,40px)', color: '#fff', marginBottom: '16px' }}>
                        Ready to Go from Bench to <span className="text-gradient">Placed?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', marginBottom: '32px', maxWidth: '460px', margin: '0 auto 32px' }}>
                        Let Nexora Pro's bench sales team market your profile to 200+ active vendors today.
                    </p>
                    <Link to="/contact" className="btn-white" style={{ fontSize: '15px', padding: '14px 32px' }}>Start Bench Sales →</Link>
                </div>
            </section>
        </div>
    );
}
