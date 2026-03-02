import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

export default function ContactLeads() {
    const { leads } = useAdmin();
    const [search, setSearch] = useState('');
    const [filterService, setFilterService] = useState('');

    const filtered = leads.filter(l => {
        const matchSearch = !search ||
            l.name.toLowerCase().includes(search.toLowerCase()) ||
            l.email.toLowerCase().includes(search.toLowerCase());
        const matchService = !filterService || l.service === filterService;
        return matchSearch && matchService;
    });

    const allServices = [...new Set(leads.map(l => l.service).filter(Boolean))];

    return (
        <div>
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '22px', color: '#1a1a2e' }}>Contact Leads</h1>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#6b7280' }}>{leads.length} total leads from the contact form</p>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <input type="text" placeholder="Search by name or email..." value={search} onChange={e => setSearch(e.target.value)}
                    className="form-input" style={{ maxWidth: '280px' }} />
                <select value={filterService} onChange={e => setFilterService(e.target.value)} className="form-input" style={{ width: 'auto', minWidth: '180px' }}>
                    <option value="">All Services</option>
                    {allServices.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {(search || filterService) && (
                    <button onClick={() => { setSearch(''); setFilterService(''); }}
                        style={{ padding: '10px 16px', border: 'none', background: '#e5e7eb', borderRadius: '8px', cursor: 'pointer', fontFamily: 'Inter', fontSize: '13px' }}>
                        Clear
                    </button>
                )}
            </div>

            {leads.length === 0 ? (
                <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
                    <h3 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '18px', color: '#1a1a2e', marginBottom: '8px' }}>No leads yet</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#6b7280' }}>
                        Contact form submissions will appear here. Submit the form on the Contact page to test.
                    </p>
                </div>
            ) : (
                <div className="card" style={{ overflow: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #f3f4f6' }}>
                                {['Name', 'Email', 'Phone', 'Service', 'Message', 'Submitted'].map(h => (
                                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(lead => (
                                <tr key={lead.id} style={{ borderBottom: '1px solid #f9fafb' }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                    <td style={{ padding: '12px 16px' }}>
                                        <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13.5px', color: '#1a1a2e' }}>{lead.name}</div>
                                    </td>
                                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter' }}>{lead.email}</td>
                                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter', whiteSpace: 'nowrap' }}>{lead.phone}</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <span className="badge badge-primary" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>{lead.service}</span>
                                    </td>
                                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#374151', fontFamily: 'Inter', maxWidth: '250px' }}>
                                        <div style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>
                                            {lead.message}
                                        </div>
                                    </td>
                                    <td style={{ padding: '12px 16px', fontSize: '12px', color: '#6b7280', fontFamily: 'Inter', whiteSpace: 'nowrap' }}>
                                        {new Date(lead.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        <br />
                                        <span style={{ fontSize: '11px' }}>{new Date(lead.submittedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr><td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontFamily: 'Inter', fontSize: '14px' }}>No matching leads</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
