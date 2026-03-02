import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/Frame 58.jpg (1).jpeg';

const navLinks = [
    { path: '/jobs', label: 'Jobs' },
    { path: '/bench-sales', label: 'Bench Sales' },
    { path: '/applications', label: 'Applications' },
    { path: '/hotlist', label: 'Hotlist' },
    { path: '/recruiting', label: 'US IT Recruiting' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    const linkStyle = (isActive) => ({
        textDecoration: 'none',
        padding: '7px 12px',
        borderRadius: '8px',
        fontSize: '13.5px',
        fontWeight: isActive ? '600' : '400',
        fontFamily: 'Inter',
        color: isActive ? '#BF3B2D' : '#1B2540',
        background: isActive ? 'rgba(191,59,45,0.08)' : 'transparent',
        border: isActive ? '1px solid rgba(191,59,45,0.18)' : '1px solid transparent',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
    });

    return (
        <>
            {/* ── Floating Pill Navbar (all pages) ── */}
            <nav style={{
                position: 'fixed',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                width: 'calc(100% - 48px)',
                maxWidth: '1100px',
                borderRadius: '16px',
                background: hasScrolled
                    ? 'rgba(255,255,255,0.95)'
                    : 'rgba(255,255,255,0.80)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: hasScrolled
                    ? '0 8px 40px rgba(27,37,64,0.13), 0 1px 0 rgba(191,59,45,0.06)'
                    : '0 4px 24px rgba(27,37,64,0.09)',
                transition: 'all 0.4s ease',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '64px' }}>

                    {/* Logo — mix-blend-mode:multiply removes white JPEG bg */}
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        <img
                            src={logo}
                            alt="Nexora Pro Tech Systems"
                            style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }}
                        />
                    </Link>

                    {/* Desktop nav links */}
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        {navLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                style={({ isActive }) => linkStyle(isActive)}
                                onMouseEnter={e => {
                                    if (!e.currentTarget.getAttribute('data-active')) {
                                        e.currentTarget.style.color = '#BF3B2D';
                                        e.currentTarget.style.background = 'rgba(191,59,45,0.05)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    const isActive = e.currentTarget.style.borderColor === 'rgba(191,59,45,0.18)';
                                    if (!isActive) {
                                        e.currentTarget.style.color = '';
                                        e.currentTarget.style.background = '';
                                    }
                                }}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link to="/contact" className="btn-primary" style={{ marginLeft: '10px', padding: '9px 20px', fontSize: '13.5px', borderRadius: '10px' }}>
                            Get Started →
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="hamburger-btn"
                        aria-label="Toggle menu"
                        style={{ background: 'rgba(27,37,64,0.06)', border: '1px solid rgba(27,37,64,0.1)', cursor: 'pointer', padding: '9px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: 'block', width: '20px', height: '2px',
                                background: '#1B2540', borderRadius: '2px',
                                transition: 'all 0.3s ease',
                                transform: isOpen
                                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                                        : i === 1 ? 'scaleX(0)'
                                            : 'rotate(-45deg) translate(5px,-5px)'
                                    : 'none',
                                opacity: isOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div style={{
                    maxHeight: isOpen ? '440px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                    borderTop: isOpen ? '1px solid rgba(27,37,64,0.07)' : 'none',
                    borderRadius: '0 0 16px 16px',
                }}>
                    <div style={{ padding: '12px 16px 16px' }}>
                        {navLinks.map(link => (
                            <NavLink key={link.path} to={link.path}
                                style={({ isActive }) => ({ ...linkStyle(isActive), display: 'block', marginBottom: '4px' })}>
                                {link.label}
                            </NavLink>
                        ))}
                        <Link to="/contact" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                            Get Started →
                        </Link>
                    </div>
                </div>
            </nav>

            <style>{`
        @media(max-width:960px){.desktop-nav{display:none!important;}.hamburger-btn{display:flex!important;}}
        @media(min-width:961px){.hamburger-btn{display:none!important;}.desktop-nav{display:flex!important;}}
      `}</style>
        </>
    );
}
