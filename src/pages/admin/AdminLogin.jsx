import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import logo from '../../assets/Frame 58.jpg (1).jpeg';

export default function AdminLogin() {
    const { login, isAuthenticated } = useAdmin();
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (isAuthenticated) {
        navigate('/admin/dashboard');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setTimeout(() => {
            const success = login(form.username, form.password);
            if (success) {
                navigate('/admin/dashboard');
            } else {
                setError('Invalid username or password');
            }
            setLoading(false);
        }, 600);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1a0a08 0%, #2d1210 60%, #1a0a08 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
        }}>
            <div style={{ width: '100%', maxWidth: '420px' }}>
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <img src={logo} alt="Nexora Pro Tech Systems" style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '14px' }} />
                    <p style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter' }}>Admin Control Panel</p>
                </div>

                {/* Card */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '36px' }}>
                    {error && (
                        <div style={{
                            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                            borderRadius: '8px', padding: '12px 16px', marginBottom: '20px',
                            fontSize: '13.5px', color: '#fca5a5', fontFamily: 'Inter',
                        }}>
                            ❌ {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins', color: '#d1d5db', marginBottom: '8px' }}>
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="admin"
                                value={form.username}
                                onChange={e => setForm(p => ({ ...p, username: e.target.value }))}
                                className="form-input"
                                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                                id="admin-username"
                            />
                        </div>
                        <div style={{ marginBottom: '28px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins', color: '#d1d5db', marginBottom: '8px' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                                className="form-input"
                                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                                id="admin-password"
                            />
                        </div>
                        <button type="submit" className="btn-primary" disabled={loading}
                            style={{ width: '100%', fontSize: '15px', padding: '14px', opacity: loading ? 0.7 : 1 }}
                            id="admin-login-btn">
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', fontSize: '12px', color: '#4b5563', marginTop: '20px', fontFamily: 'Inter' }}>
                        Credentials: admin / nexora2024
                    </p>
                </div>
            </div>
        </div>
    );
}
