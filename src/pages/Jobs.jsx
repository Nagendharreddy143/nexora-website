import { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563'; const S = '#6b7280';

export default function Jobs() {
    const { jobs } = useAdmin();
    const [search, setSearch] = useState('');
    const [type, setType] = useState('All');
    const [applyJob, setApplyJob] = useState(null);
    const [form, setForm] = useState({ name: '', email: '', phone: '', resume: '' });
    const [submitted, setSubmitted] = useState(false);
    const types = ['All', 'Remote', 'Hybrid', 'On-site'];

    const filtered = useMemo(() => jobs.filter(j =>
        (type === 'All' || j.workType === type) &&
        (j.title.toLowerCase().includes(search.toLowerCase()) || j.location.toLowerCase().includes(search.toLowerCase()) || j.skills.some(s => s.toLowerCase().includes(search.toLowerCase())))
    ), [jobs, search, type]);

    const handleApply = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => { setApplyJob(null); setSubmitted(false); setForm({ name: '', email: '', phone: '', resume: '' }); }, 2500);
    };

    return (
        <div className="page-bg home-pt">
            <section style={{ padding: '80px 0 56px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-primary" style={{ marginBottom: '16px' }}>Open Positions</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '18px' }}>
                        Find Your Next <span className="text-gradient">IT Opportunity</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '520px' }}>
                        Browse open positions sourced directly from direct clients and implementation partners. Apply in one click.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section style={{ padding: '40px 0 0' }}>
                <div className="container-custom">
                    <div className="glass" style={{ padding: '20px 24px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <input className="form-input" placeholder="🔍  Search jobs, skills, location..." value={search} onChange={e => setSearch(e.target.value)} style={{ flex: '1', minWidth: '240px' }} />
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {types.map(t => (
                                <button key={t} onClick={() => setType(t)}
                                    style={{
                                        padding: '7px 16px', borderRadius: '8px', border: '1.5px solid', fontSize: '13px', fontFamily: 'Poppins', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                                        background: type === t ? '#BF3B2D' : 'transparent', color: type === t ? '#fff' : D, borderColor: type === t ? '#BF3B2D' : 'rgba(27,37,64,0.2)'
                                    }}>
                                    {t}
                                </button>
                            ))}
                        </div>
                        <div style={{ fontSize: '13px', color: S }}>{filtered.length} jobs</div>
                    </div>
                </div>
            </section>

            {/* Jobs Grid */}
            <section style={{ padding: '24px 0 88px' }}>
                <div className="container-custom">
                    {filtered.length === 0 ? (
                        <div className="glass-strong" style={{ padding: '60px', textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', color: D, marginBottom: '8px' }}>No jobs found</h3>
                            <p style={{ color: S }}>Try different search terms.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px,1fr))', gap: '20px' }}>
                            {filtered.map(job => (
                                <div key={job.id} className="glass" style={{ padding: '28px 24px', position: 'relative' }}>
                                    {job.urgent && (
                                        <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                                            <span className="badge badge-primary" style={{ fontSize: '10px', padding: '3px 10px', background: 'rgba(191,59,45,0.1)', color: '#BF3B2D' }}>URGENT</span>
                                        </div>
                                    )}
                                    <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: D, marginBottom: '8px', paddingRight: '60px' }}>{job.title}</h3>
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                                        <span style={{ fontSize: '13px', color: M }}>📍 {job.location}</span>
                                        <span style={{ fontSize: '13px', color: M }}>💰 {job.rate}</span>
                                        <span className={`badge ${job.workType === 'Remote' ? 'badge-green' : job.workType === 'Hybrid' ? 'badge-blue' : 'badge-primary'}`} style={{ fontSize: '11px', padding: '2px 10px' }}>{job.workType}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                                        {job.skills.map(s => <span key={s} className="badge badge-primary" style={{ fontSize: '11px', padding: '3px 10px' }}>{s}</span>)}
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => { setApplyJob(job); setSubmitted(false); }} className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '13px' }}>Apply Now</button>
                                        <Link to="/contact" className="btn-glass" style={{ padding: '10px 16px', fontSize: '13px' }}>Inquire</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Apply Modal */}
            {applyJob && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(27,37,64,0.5)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(8px)' }} onClick={e => { if (e.target === e.currentTarget) setApplyJob(null); }}>
                    <div className="glass-strong" style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', padding: '40px', position: 'relative', boxShadow: '0 20px 80px rgba(27,37,64,0.2)' }}>
                        <button onClick={() => setApplyJob(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(27,37,64,0.06)', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '32px', height: '32px', fontSize: '16px', color: D }}>×</button>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '22px', color: D, marginBottom: '8px' }}>Application Sent!</h3>
                                <p style={{ color: M }}>We'll review your profile and reach out within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '20px', color: D, marginBottom: '6px' }}>Apply: {applyJob.title}</h3>
                                <p style={{ fontSize: '13px', color: S, marginBottom: '24px' }}>{applyJob.location} · {applyJob.rate}</p>
                                <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    <input className="form-input" placeholder="Full Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                    <input className="form-input" type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                    <input className="form-input" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                                    <input className="form-input" placeholder="Resume Link (Google Drive / LinkedIn)" value={form.resume} onChange={e => setForm({ ...form, resume: e.target.value })} />
                                    <button type="submit" className="btn-primary" style={{ padding: '13px', fontSize: '15px', justifyContent: 'center' }}>Submit Application →</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
