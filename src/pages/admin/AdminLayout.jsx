import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import logo from '../../assets/Frame 58.jpg (1).jpeg';

const sidebarLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/jobs', label: 'Manage Jobs', icon: '💼' },
    { path: '/admin/hotlist', label: 'Manage Hotlist', icon: '👥' },
    { path: '/admin/leads', label: 'Contact Leads', icon: '📩' },
];

export default function AdminLayout() {
    const { logout } = useAdmin();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f9fafb' }}>
            {/* Sidebar */}
            <aside style={{
                width: sidebarOpen ? '240px' : '0',
                background: '#0f0605',
                flexShrink: 0,
                overflow: 'hidden',
                transition: 'width 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={logo} alt="Nexora Pro" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                    <div>
                        <div style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '13px', color: '#fff', whiteSpace: 'nowrap' }}>
                            Nexora Admin
                        </div>
                        <div style={{ fontSize: '10px', color: '#4b5563', fontFamily: 'Inter' }}>Control Panel</div>
                    </div>
                </div>

                <nav style={{ padding: '16px 12px', flex: 1 }}>
                    {sidebarLinks.map(link => (
                        <NavLink key={link.path} to={link.path} style={({ isActive }) => ({
                            display: 'flex', alignItems: 'center', gap: '10px',
                            padding: '10px 12px', borderRadius: '8px', marginBottom: '4px',
                            textDecoration: 'none',
                            fontFamily: 'Inter', fontSize: '13.5px', fontWeight: isActive ? '600' : '400',
                            color: isActive ? '#fff' : '#9ca3af',
                            background: isActive ? 'rgba(179,60,47,0.25)' : 'transparent',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease',
                        })}>
                            <span>{link.icon}</span>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <a href="/" target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 12px', borderRadius: '8px', textDecoration: 'none',
                        color: '#9ca3af', fontFamily: 'Inter', fontSize: '13px', whiteSpace: 'nowrap', marginBottom: '4px',
                    }}>
                        🌐 View Website
                    </a>
                    <button onClick={handleLogout} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 12px', borderRadius: '8px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: '#9ca3af', fontFamily: 'Inter', fontSize: '13px', whiteSpace: 'nowrap', width: '100%',
                    }}>
                        🚪 Logout
                    </button>
                </div>
            </aside>

            {/* Main */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                {/* Top bar */}
                <header style={{
                    background: '#fff', padding: '0 24px',
                    height: '60px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #e5e7eb', flexShrink: 0,
                }}>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        padding: '8px', borderRadius: '6px', fontSize: '18px',
                    }}>
                        ☰
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '13px', color: '#6b7280', fontFamily: 'Inter' }}>Logged in as <strong>admin</strong></div>
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #B33C2F, #C26359)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff', fontFamily: 'Poppins', fontWeight: '700', fontSize: '13px',
                        }}>A</div>
                    </div>
                </header>

                <main style={{ flex: 1, padding: '32px' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
