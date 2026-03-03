import { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Link } from 'react-router-dom';
const D = '#1B2540'; const M = '#4b5563'; const S = '#6b7280';
const visaColors = { 'H1B': 'badge-blue', 'OPT': 'badge-yellow', 'GC': 'badge-green', 'USC': 'badge-purple' };
const avatarColors = ['#BF3B2D', '#1d4ed8', '#16a34a', '#7c3aed', '#d97706', '#0ea5e9'];

export default function Hotlist() {
    const { hotlist } = useAdmin();
    const [search, setSearch] = useState('');
    const [visa, setVisa] = useState('All');
    const visas = ['All', 'H1B', 'OPT', 'GC', 'USC'];
    const filtered = useMemo(() => hotlist.filter(c =>
        (visa === 'All' || c.visaStatus === visa) &&
        (c.name.toLowerCase().includes(search.toLowerCase()) || c.title.toLowerCase().includes(search.toLowerCase()) || c.skills.some(s => s.toLowerCase().includes(search.toLowerCase())))
    ), [hotlist, search, visa]);

    return (
        <div className="page-bg home-pt">
            <section style={{ padding: '80px 0 56px', background: 'linear-gradient(150deg, #fff 0%, #F5F0E8 100%)', borderBottom: '1px solid rgba(27,37,64,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div className="orb" style={{ width: '400px', height: '400px', top: '-80px', right: '-80px', background: 'radial-gradient(circle, rgba(191,59,45,0.08), transparent 70%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="badge badge-green" style={{ marginBottom: '16px' }}>● Live Hotlist</span>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '900', fontSize: 'clamp(28px,4.5vw,52px)', color: D, marginBottom: '18px' }}>
                        Available IT <span className="text-gradient">Bench Consultants</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: M, lineHeight: '1.8', maxWidth: '540px' }}>
                        Browse our active bench consultants available for immediate engagement — C2C, W2, and full-time openings.
                    </p>
                </div>
            </section>

            <section style={{ padding: '48px 0 16px' }}>
                <div className="container-custom">
                    <div className="glass" style={{ padding: '20px 24px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <input
                            className="form-input"
                            placeholder="🔍  Search by name, title, or skills..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ flex: '1', minWidth: '240px' }}
                        />
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {visas.map(v => (
                                <button key={v} onClick={() => setVisa(v)}
                                    style={{
                                        padding: '7px 16px', borderRadius: '8px', border: '1.5px solid', fontSize: '13px', fontFamily: 'Poppins', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                                        background: visa === v ? '#BF3B2D' : 'transparent',
                                        color: visa === v ? '#fff' : D,
                                        borderColor: visa === v ? '#BF3B2D' : 'rgba(27,37,64,0.2)',
                                    }}>{v}</button>
                            ))}
                        </div>
                        <div style={{ fontSize: '13px', color: S, fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>{filtered.length} candidates</div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '24px 0 88px' }}>
                <div className="container-custom">
                    {filtered.length === 0 ? (
                        <div className="glass-strong" style={{ padding: '60px', textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
                            <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', color: D, marginBottom: '8px' }}>No candidates found</h3>
                            <p style={{ color: S }}>Try adjusting your search or filter.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '20px' }}>
                            {filtered.map((c, i) => (
                                <div key={c.id} className="glass" style={{ padding: '28px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                                        <div style={{ width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0, background: `linear-gradient(135deg, ${avatarColors[i % 6]}, ${avatarColors[(i + 2) % 6]})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Poppins', fontWeight: '800', fontSize: '18px', boxShadow: `0 4px 12px ${avatarColors[i % 6]}40` }}>{c.name.charAt(0)}</div>
                                        <div>
                                            <div style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', color: D }}>{c.name}</div>
                                            <div style={{ fontSize: '13px', color: M }}>{c.title}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                                        {c.skills.slice(0, 4).map(s => <span key={s} className="badge badge-primary" style={{ fontSize: '11px', padding: '3px 10px' }}>{s}</span>)}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontSize: '12px', color: S }}>📍 {c.location}</span>
                                        <span className={`badge ${visaColors[c.visaStatus] || 'badge-primary'}`} style={{ fontSize: '11px', padding: '3px 10px' }}>{c.visaStatus}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="badge badge-green" style={{ fontSize: '11px' }}>{c.availability}</span>
                                        <span style={{ fontSize: '12px', color: S }}>Exp: {c.experience}</span>
                                    </div>
                                    <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '9px', fontSize: '13px' }}>Contact About Candidate →</Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
