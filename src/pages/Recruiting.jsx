import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563';

const hiringModels = [
    { type: 'C2C', title: 'Corp-to-Corp', desc: 'Maximum independence. Perfect for LLC/S-Corp owners seeking higher rates and tax flexibility.', pros: ['Higher bill rates', 'Tax flexibility', 'Business deductions'], color: '#BF3B2D' },
    { type: 'W2', title: 'W2 Employee', desc: 'Work directly as an employee. Benefits included, simpler taxes.', pros: ['Benefits eligible', 'Simpler tax filing', 'No entity required'], color: '#1B2540' },
    { type: 'FT', title: 'Full-Time', desc: 'Permanent placement with salary, benefits, and job security.', pros: ['Long-term stability', 'Full benefits', 'Career growth'], color: '#16a34a' },
];
const domains = ['Java / Spring Boot', 'Python / Django', 'AWS / DevOps', 'React / Frontend', 'Data Engineering', 'Salesforce', 'SAP', 'ServiceNow', 'Cybersecurity', 'Testing / QA', 'Business Analysis', 'Project Management'];
const process = [
    { step: '1', title: 'Requirement Intake', desc: 'We collect job details from clients — skills, location, visa, rate, and timeline.' },
    { step: '2', title: 'Talent Sourcing', desc: 'We search our active bench network and resume database for matching consultants.' },
    { step: '3', title: 'Screening & Submission', desc: 'We conduct technical screening and submit only qualified candidates to clients.' },
    { step: '4', title: 'Interview & Offer', desc: 'We coordinate interviews and negotiate offers until placement is complete.' },
];

export default function Recruiting() {
    return (
        <div className="page-bg home-pt">
            <section style={{ padding: '80px 0 64px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>US IT Recruiting</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '20px', lineHeight: '1.1' }}>
                        End-to-End Recruiting<br /><span className="text-gradient">For US IT Requirements</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '560px', marginBottom: '32px' }}>
                        We source, screen, and place IT consultants for C2C, W2, and Full-Time roles — from direct clients and implementation partners.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>Submit a Requirement →</Link>
                </div>
            </section>

            <section style={{ padding: '88px 0' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <h2 className="section-title">Hiring <span className="text-gradient">Models We Support</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
                        {hiringModels.map(m => (
                            <div key={m.type} className="glass" style={{ padding: '32px 28px', borderTop: `3px solid ${m.color}` }}>
                                <span className="badge" style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}30`, marginBottom: '16px' }}>{m.type}</span>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', color: D, marginBottom: '12px' }}>{m.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.75', marginBottom: '20px' }}>{m.desc}</p>
                                {m.pros.map(p => (
                                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <span style={{ color: m.color }}>✓</span>
                                        <span style={{ fontSize: '13px', color: M }}>{p}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '0 0 88px' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <h2 className="section-title">Our <span className="text-gradient">Recruiting Process</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' }}>
                        {process.map(p => (
                            <div key={p.step} className="glass-card" style={{ padding: '28px 24px' }}>
                                <div className="step-number" style={{ marginBottom: '16px' }}>{p.step}</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '17px', color: D, marginBottom: '10px' }}>{p.title}</h3>
                                <p style={{ fontSize: '14px', color: M, lineHeight: '1.7' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '0 0 88px', background: 'rgba(191,59,45,0.04)', borderTop: '1px solid rgba(191,59,45,0.08)' }}>
                <div className="container-custom" style={{ paddingTop: '88px' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '36px' }}>Technology <span className="text-gradient">Domains</span></h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {domains.map(d => <span key={d} className="badge badge-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>{d}</span>)}
                    </div>
                </div>
            </section>

            <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #1B2540 0%, #2d3d60 100%)' }}>
                <div className="container-custom" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(24px,3.5vw,40px)', color: '#fff', marginBottom: '16px' }}>Have a Requirement to Fill?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '32px', maxWidth: '440px', margin: '0 auto 32px' }}>Contact us today and we'll have qualified candidates in front of you within 24 hours.</p>
                    <Link to="/contact" className="btn-white" style={{ fontSize: '15px', padding: '14px 32px' }}>Submit Requirement →</Link>
                </div>
            </section>
        </div>
    );
}
