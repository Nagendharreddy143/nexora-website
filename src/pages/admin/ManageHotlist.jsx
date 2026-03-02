import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

const emptyCandidate = { name: '', title: '', skills: '', experience: '', visa: '', location: '', availability: '', education: '' };

export default function ManageHotlist() {
    const { hotlist, addCandidate, updateCandidate, deleteCandidate } = useAdmin();
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(emptyCandidate);
    const [search, setSearch] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(null);

    const openAdd = () => { setForm(emptyCandidate); setEditingId(null); setShowModal(true); };
    const openEdit = (c) => {
        setForm({ ...c, skills: Array.isArray(c.skills) ? c.skills.join(', ') : c.skills });
        setEditingId(c.id);
        setShowModal(true);
    };
    const closeModal = () => { setShowModal(false); setEditingId(null); setForm(emptyCandidate); };

    const handleSave = () => {
        if (!form.name || !form.title) return;
        if (editingId) updateCandidate(editingId, form);
        else addCandidate(form);
        closeModal();
    };

    const filtered = hotlist.filter(c =>
        !search || c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        (Array.isArray(c.skills) ? c.skills.some(s => s.toLowerCase().includes(search.toLowerCase())) : false)
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '22px', color: '#1a1a2e' }}>Manage Hotlist</h1>
                    <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#6b7280' }}>{hotlist.length} total candidates</p>
                </div>
                <button onClick={openAdd} className="btn-primary" style={{ fontSize: '14px' }}>+ Add Candidate</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <input type="text" placeholder="Search candidates..." value={search} onChange={e => setSearch(e.target.value)}
                    className="form-input" style={{ maxWidth: '320px' }} />
            </div>

            <div className="card" style={{ overflow: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #f3f4f6' }}>
                            {['Name', 'Title', 'Skills', 'Experience', 'Visa', 'Availability', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(c => (
                            <tr key={c.id} style={{ borderBottom: '1px solid #f9fafb' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                                            background: 'linear-gradient(135deg, #B33C2F, #C26359)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#fff', fontFamily: 'Poppins', fontWeight: '700', fontSize: '12px',
                                        }}>{c.name.charAt(0)}</div>
                                        <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13px', color: '#1a1a2e', whiteSpace: 'nowrap' }}>{c.name}</div>
                                    </div>
                                </td>
                                <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter' }}>{c.title}</td>
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '200px' }}>
                                        {(Array.isArray(c.skills) ? c.skills : []).slice(0, 3).map(s => (
                                            <span key={s} className="badge badge-primary" style={{ fontSize: '10px' }}>{s}</span>
                                        ))}
                                    </div>
                                </td>
                                <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter', whiteSpace: 'nowrap' }}>{c.experience}</td>
                                <td style={{ padding: '12px 16px' }}>
                                    <span className="badge badge-blue" style={{ fontSize: '11px' }}>{c.visa}</span>
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    <span className={`badge ${c.availability === 'Immediate' ? 'badge-green' : 'badge-yellow'}`} style={{ fontSize: '11px' }}>
                                        {c.availability}
                                    </span>
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button onClick={() => openEdit(c)} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer', fontSize: '12px', fontFamily: 'Inter' }}>Edit</button>
                                        <button onClick={() => setConfirmDelete(c.id)} style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: '#fef2f2', color: '#B33C2F', cursor: 'pointer', fontSize: '12px', fontFamily: 'Inter' }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontFamily: 'Inter', fontSize: '14px' }}>No candidates found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '20px' }}
                    onClick={closeModal}>
                    <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', maxWidth: '580px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}
                        onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h2 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: '#1a1a2e' }}>{editingId ? 'Edit Candidate' : 'Add Candidate'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: '#9ca3af' }}>✕</button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {[
                                { label: 'Full Name *', field: 'name', placeholder: 'e.g. Ravi Kumar' },
                                { label: 'Job Title *', field: 'title', placeholder: 'e.g. Java Developer' },
                                { label: 'Experience', field: 'experience', placeholder: 'e.g. 5 Years' },
                                { label: 'Location', field: 'location', placeholder: 'e.g. Dallas, TX' },
                                { label: 'Education', field: 'education', placeholder: 'e.g. MS Computer Science' },
                            ].map(f => (
                                <div key={f.field}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>{f.label}</label>
                                    <input type="text" placeholder={f.placeholder} value={form[f.field]}
                                        onChange={e => setForm(p => ({ ...p, [f.field]: e.target.value }))} className="form-input" />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Visa Status</label>
                                <select value={form.visa} onChange={e => setForm(p => ({ ...p, visa: e.target.value }))} className="form-input">
                                    <option value="">Select...</option>
                                    <option>H1B</option><option>OPT</option><option>GC</option><option>USC</option><option>L1</option><option>EAD</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Availability</label>
                                <select value={form.availability} onChange={e => setForm(p => ({ ...p, availability: e.target.value }))} className="form-input">
                                    <option value="">Select...</option>
                                    <option>Immediate</option><option>2 Weeks</option><option>1 Month</option>
                                </select>
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Skills (comma-separated)</label>
                                <input type="text" placeholder="Java, Spring Boot, React" value={form.skills}
                                    onChange={e => setForm(p => ({ ...p, skills: e.target.value }))} className="form-input" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            <button onClick={handleSave} className="btn-primary" style={{ flex: 1, fontSize: '14px' }}>
                                {editingId ? 'Save Changes' : 'Add Candidate'}
                            </button>
                            <button onClick={closeModal} className="btn-outline" style={{ flex: 1, fontSize: '14px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {confirmDelete && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2001, padding: '20px' }}>
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '380px', width: '100%', textAlign: 'center' }}>
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚠️</div>
                        <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: '#1a1a2e', marginBottom: '10px' }}>Remove this candidate?</h3>
                        <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>This action cannot be undone.</p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => { deleteCandidate(confirmDelete); setConfirmDelete(null); }}
                                style={{ flex: 1, padding: '11px', background: '#B33C2F', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px' }}>
                                Remove
                            </button>
                            <button onClick={() => setConfirmDelete(null)} className="btn-outline" style={{ flex: 1, fontSize: '14px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
