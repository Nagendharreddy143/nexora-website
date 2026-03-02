import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

const emptyJob = { title: '', location: '', experience: '', skills: '', visa: '', type: '', description: '', urgent: false };

export default function ManageJobs() {
    const { jobs, addJob, updateJob, deleteJob } = useAdmin();
    const [showModal, setShowModal] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [form, setForm] = useState(emptyJob);
    const [search, setSearch] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(null);

    const openAdd = () => { setForm(emptyJob); setEditingJob(null); setShowModal(true); };
    const openEdit = (job) => {
        setForm({ ...job, skills: Array.isArray(job.skills) ? job.skills.join(', ') : job.skills });
        setEditingJob(job.id);
        setShowModal(true);
    };
    const closeModal = () => { setShowModal(false); setEditingJob(null); setForm(emptyJob); };

    const handleSave = () => {
        if (!form.title || !form.location) return;
        if (editingJob) updateJob(editingJob, form);
        else addJob(form);
        closeModal();
    };

    const filtered = jobs.filter(j =>
        !search || j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                    <h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '22px', color: '#1a1a2e' }}>Manage Jobs</h1>
                    <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#6b7280' }}>{jobs.length} total job listings</p>
                </div>
                <button onClick={openAdd} className="btn-primary" style={{ fontSize: '14px' }}>+ Add New Job</button>
            </div>

            {/* Search */}
            <div style={{ marginBottom: '20px' }}>
                <input type="text" placeholder="Search jobs..." value={search} onChange={e => setSearch(e.target.value)}
                    className="form-input" style={{ maxWidth: '320px' }} />
            </div>

            {/* Table */}
            <div className="card" style={{ overflow: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #f3f4f6' }}>
                            {['Title', 'Location', 'Experience', 'Type', 'Visa', 'Urgent', 'Actions'].map(h => (
                                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(job => (
                            <tr key={job.id} style={{ borderBottom: '1px solid #f9fafb' }}
                                onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13.5px', color: '#1a1a2e' }}>{job.title}</div>
                                    <div style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'Inter' }}>{job.postedDate}</div>
                                </td>
                                <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter', whiteSpace: 'nowrap' }}>{job.location}</td>
                                <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter' }}>{job.experience}</td>
                                <td style={{ padding: '12px 16px' }}>
                                    <span className="badge badge-blue" style={{ fontSize: '11px' }}>{job.type}</span>
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    <span className="badge badge-green" style={{ fontSize: '11px' }}>{job.visa}</span>
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    {job.urgent
                                        ? <span className="badge" style={{ background: '#fef2f2', color: '#B33C2F', fontSize: '11px' }}>Yes</span>
                                        : <span className="badge" style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '11px' }}>No</span>}
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button onClick={() => openEdit(job)} style={{
                                            padding: '6px 12px', borderRadius: '6px', border: '1px solid #e5e7eb',
                                            background: '#fff', cursor: 'pointer', fontSize: '12px', fontFamily: 'Inter',
                                        }}>Edit</button>
                                        <button onClick={() => setConfirmDelete(job.id)} style={{
                                            padding: '6px 12px', borderRadius: '6px', border: 'none',
                                            background: '#fef2f2', color: '#B33C2F', cursor: 'pointer', fontSize: '12px', fontFamily: 'Inter',
                                        }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontFamily: 'Inter', fontSize: '14px' }}>No jobs found</td></tr>
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
                            <h2 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: '#1a1a2e' }}>{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: '#9ca3af' }}>✕</button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {[
                                { label: 'Job Title *', field: 'title', placeholder: 'e.g. Java Developer' },
                                { label: 'Location', field: 'location', placeholder: 'e.g. Dallas, TX (Remote)' },
                                { label: 'Experience', field: 'experience', placeholder: 'e.g. 5+ Years' },
                                { label: 'Visa', field: 'visa', placeholder: 'e.g. H1B/GC/USC' },
                            ].map(f => (
                                <div key={f.field}>
                                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>{f.label}</label>
                                    <input type="text" placeholder={f.placeholder} value={form[f.field]}
                                        onChange={e => setForm(p => ({ ...p, [f.field]: e.target.value }))}
                                        className="form-input" />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Type</label>
                                <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} className="form-input">
                                    <option value="">Select...</option>
                                    <option>C2C</option><option>W2</option><option>Full-time</option>
                                    <option>C2C/W2</option><option>C2C/Full-time</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-end', paddingBottom: '4px' }}>
                                <input type="checkbox" id="urgent-check" checked={form.urgent}
                                    onChange={e => setForm(p => ({ ...p, urgent: e.target.checked }))} style={{ width: '16px', height: '16px' }} />
                                <label htmlFor="urgent-check" style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13px', color: '#374151', cursor: 'pointer' }}>Mark as Urgent</label>
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Skills (comma-separated)</label>
                                <input type="text" placeholder="Java, Spring Boot, React" value={form.skills}
                                    onChange={e => setForm(p => ({ ...p, skills: e.target.value }))} className="form-input" />
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', fontFamily: 'Poppins', color: '#374151', marginBottom: '6px' }}>Description</label>
                                <textarea rows={4} placeholder="Job description..." value={form.description}
                                    onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                                    className="form-input" style={{ resize: 'vertical' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            <button onClick={handleSave} className="btn-primary" style={{ flex: 1, fontSize: '14px' }}>
                                {editingJob ? 'Save Changes' : 'Add Job'}
                            </button>
                            <button onClick={closeModal} className="btn-outline" style={{ flex: 1, fontSize: '14px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirm */}
            {confirmDelete && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2001, padding: '20px' }}>
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '380px', width: '100%', textAlign: 'center' }}>
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚠️</div>
                        <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: '#1a1a2e', marginBottom: '10px' }}>Delete this job?</h3>
                        <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>This action cannot be undone.</p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => { deleteJob(confirmDelete); setConfirmDelete(null); }}
                                style={{ flex: 1, padding: '11px', background: '#B33C2F', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px' }}>
                                Delete
                            </button>
                            <button onClick={() => setConfirmDelete(null)} className="btn-outline" style={{ flex: 1, fontSize: '14px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
