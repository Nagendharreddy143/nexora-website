import { useAdmin } from '../../context/AdminContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { jobs, hotlist, leads } = useAdmin();

    const urgentJobs = jobs.filter(j => j.urgent).length;
    const immediateAvail = hotlist.filter(c => c.availability === 'Immediate').length;
    const todayLeads = leads.filter(l => {
        const d = new Date(l.submittedAt);
        const now = new Date();
        return d.toDateString() === now.toDateString();
    }).length;

    const stats = [
        { label: 'Total Jobs', value: jobs.length, sub: `${urgentJobs} urgent`, color: '#eff6ff', icon: '💼', link: '/admin/jobs' },
        { label: 'Hotlist Candidates', value: hotlist.length, sub: `${immediateAvail} immediately available`, color: '#f0fdf4', icon: '👥', link: '/admin/hotlist' },
        { label: 'Contact Leads', value: leads.length, sub: `${todayLeads} today`, color: '#fef9c3', icon: '📩', link: '/admin/leads' },
        { label: 'Active Services', value: 3, sub: 'Bench Sales, Applications, Recruiting', color: '#fef2f2', icon: '⚡', link: '/' },
    ];

    return (
        <div>
            <div style={{ marginBottom: '28px' }}>
                <h1 style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '24px', color: '#1a1a2e' }}>Dashboard</h1>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#6b7280' }}>Welcome back, Admin. Here's your snapshot.</p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '36px' }}>
                {stats.map(s => (
                    <Link key={s.label} to={s.link} style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ padding: '24px', background: s.color, boxShadow: 'none', border: '1px solid #e5e7eb' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <span style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '13px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</span>
                                <span style={{ fontSize: '22px' }}>{s.icon}</span>
                            </div>
                            <div style={{ fontFamily: 'Poppins', fontWeight: '800', fontSize: '36px', color: '#1a1a2e', lineHeight: '1' }}>{s.value}</div>
                            <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'Inter', marginTop: '6px' }}>{s.sub}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Recent Jobs */}
                <div className="card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3 style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px', color: '#1a1a2e' }}>Recent Jobs</h3>
                        <Link to="/admin/jobs" style={{ fontSize: '13px', color: '#B33C2F', fontFamily: 'Inter', textDecoration: 'none' }}>View All →</Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {jobs.slice(0, 5).map(j => (
                            <div key={j.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                                <div>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13px', color: '#1a1a2e' }}>{j.title}</div>
                                    <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'Inter' }}>{j.location}</div>
                                </div>
                                {j.urgent && <span style={{ background: '#fef2f2', color: '#B33C2F', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '12px', fontFamily: 'Poppins' }}>URGENT</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Leads */}
                <div className="card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3 style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px', color: '#1a1a2e' }}>Recent Leads</h3>
                        <Link to="/admin/leads" style={{ fontSize: '13px', color: '#B33C2F', fontFamily: 'Inter', textDecoration: 'none' }}>View All →</Link>
                    </div>
                    {leads.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '24px 0', color: '#9ca3af' }}>
                            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📭</div>
                            <p style={{ fontFamily: 'Inter', fontSize: '13px' }}>No leads yet. They'll appear when someone submits the contact form.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {leads.slice(0, 5).map(l => (
                                <div key={l.id} style={{ padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
                                    <div style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '13px', color: '#1a1a2e' }}>{l.name}</div>
                                    <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'Inter' }}>{l.service} • {l.email}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ padding: '24px', marginTop: '24px' }}>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px', color: '#1a1a2e', marginBottom: '16px' }}>Quick Actions</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to="/admin/jobs" className="btn-primary" style={{ fontSize: '13.5px', padding: '10px 20px' }}>+ Add New Job</Link>
                    <Link to="/admin/hotlist" className="btn-outline" style={{ fontSize: '13.5px', padding: '9px 19px' }}>+ Add Candidate</Link>
                    <Link to="/admin/leads" className="btn-outline" style={{ fontSize: '13.5px', padding: '9px 19px' }}>View All Leads</Link>
                </div>
            </div>
        </div>
    );
}
