import { Link } from 'react-router-dom';
import logo from '../assets/Frame 58.jpg (1).jpeg';

const footerLinks = {
    Services: [
        { label: 'Bench Sales', path: '/bench-sales' },
        { label: 'Application Services', path: '/applications' },
        { label: 'US IT Recruiting', path: '/recruiting' },
    ],
    Pages: [
        { label: 'Hotlist', path: '/hotlist' },
        { label: 'Open Jobs', path: '/jobs' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #1B2540 0%, #2d3d60 100%)',
            paddingTop: '56px',
        }}>
            <div className="container-custom">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '20px', display: 'inline-block', background: '#fff', borderRadius: '10px', padding: '6px 14px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                            <img src={logo} alt="Nexora Pro Tech Systems" style={{ height: '34px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.8', maxWidth: '280px', marginBottom: '24px' }}>
                            US IT Staffing experts specializing in bench sales, application services, and recruiting for IT consultants.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {['LinkedIn', 'Twitter', 'Email'].map(s => (
                                <a key={s} href="#" style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', transition: 'all 0.2s' }}>
                                    {s === 'LinkedIn' ? 'in' : s === 'Twitter' ? '𝕏' : '✉'}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <div style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>{section}</div>
                            {links.map(l => (
                                <Link key={l.path} to={l.path} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s', fontFamily: 'Inter' }}
                                    onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', fontFamily: 'Inter' }}>
                        © 2024 Nexora Pro Tech Systems. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        {['Privacy Policy', 'Terms of Service'].map(t => (
                            <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '12px', fontFamily: 'Inter' }}>{t}</a>
                        ))}
                        <Link
                            to="/admin"
                            style={{ color: 'rgba(255,255,255,0.2)', textDecoration: 'none', fontSize: '11px', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                        >
                            🔐 Admin Portal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
