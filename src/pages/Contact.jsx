import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
const D = '#1B2540'; const M = '#4b5563'; const S = '#6b7280';

const services = ['Bench Sales', 'Application Services ($250/mo)', 'US IT Recruiting', 'General Inquiry', 'Partnership / Vendor'];
const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'contact@nexoraprotech.com', href: 'mailto:contact@nexoraprotech.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: '📍', label: 'Location', value: 'United States (Remote)', href: null },
    { icon: '🕒', label: 'Hours', value: 'Mon–Fri, 9AM–7PM EST', href: null },
];

export default function Contact() {
    const { addLead } = useAdmin();
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addLead({ ...form, createdAt: new Date().toISOString() });
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div className="page-bg" style={{ paddingTop: '90px' }}>
            <section style={{ padding: '80px 0 56px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>Get In Touch</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '18px' }}>
                        Ready to Start Your <span className="text-gradient">Placement Journey?</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '520px' }}>
                        Fill out the form and our team will reach out within a few hours to discuss your needs.
                    </p>
                </div>
            </section>

            <section style={{ padding: '72px 0 88px' }}>
                <div className="container-custom">
                    <div className="rg-contact">

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {contactInfo.map(c => (
                                <div key={c.label} className="glass-card" style={{ padding: '22px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(191,59,45,0.1)', border: '1px solid rgba(191,59,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{c.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '11px', color: S, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>{c.label}</div>
                                        {c.href ? (
                                            <a href={c.href} style={{ fontSize: '14px', color: '#BF3B2D', fontWeight: '600', textDecoration: 'none' }}>{c.value}</a>
                                        ) : (
                                            <div style={{ fontSize: '14px', color: D, fontWeight: '600' }}>{c.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="glass" style={{ padding: '24px', marginTop: '4px', borderLeft: '4px solid #BF3B2D' }}>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '15px', color: D, marginBottom: '10px' }}>⚡ Fast Response</h3>
                                <p style={{ fontSize: '13px', color: M, lineHeight: '1.7' }}>We typically respond within 4 hours during business hours. Urgent inquiries receive same-day responses.</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="glass-strong" style={{ padding: '40px 36px' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                                    <h3 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '24px', color: D, marginBottom: '12px' }}>Message Sent!</h3>
                                    <p style={{ color: M, fontSize: '15px', lineHeight: '1.75' }}>Thank you for reaching out! We'll get back to you within a few hours.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '28px' }}>Send Another →</button>
                                </div>
                            ) : (
                                <>
                                    <h2 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', color: D, marginBottom: '28px' }}>Send us a Message</h2>
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                            <div><label style={{ display: 'block', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', color: S, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name *</label>
                                                <input className="form-input" placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div>
                                            <div><label style={{ display: 'block', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', color: S, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email *</label>
                                                <input className="form-input" type="email" placeholder="john@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
                                        </div>
                                        <div><label style={{ display: 'block', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', color: S, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</label>
                                            <input className="form-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
                                        <div><label style={{ display: 'block', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', color: S, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service Interested In</label>
                                            <select className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                                <option value="">Select a service...</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select></div>
                                        <div><label style={{ display: 'block', fontSize: '12px', fontFamily: 'Poppins', fontWeight: '600', color: S, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message *</label>
                                            <textarea className="form-input" placeholder="Tell us about your background, current situation, and what you're looking for..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={5} style={{ resize: 'vertical', height: '120px' }} /></div>
                                        <button type="submit" className="btn-primary animate-pulse-glow" style={{ padding: '14px', fontSize: '15px', justifyContent: 'center', width: '100%' }}>Send Message →</button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
