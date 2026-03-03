import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider, useAdmin } from './context/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Public pages
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import BenchSales from './pages/BenchSales';
import Applications from './pages/Applications';
import Hotlist from './pages/Hotlist';
import Recruiting from './pages/Recruiting';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageJobs from './pages/admin/ManageJobs';
import ManageHotlist from './pages/admin/ManageHotlist';
import ContactLeads from './pages/admin/ContactLeads';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/jobs" element={<PublicLayout><Jobs /></PublicLayout>} />
          <Route path="/bench-sales" element={<PublicLayout><BenchSales /></PublicLayout>} />
          <Route path="/applications" element={<PublicLayout><Applications /></PublicLayout>} />
          <Route path="/hotlist" element={<PublicLayout><Hotlist /></PublicLayout>} />
          <Route path="/recruiting" element={<PublicLayout><Recruiting /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<ManageJobs />} />
            <Route path="hotlist" element={<ManageHotlist />} />
            <Route path="leads" element={<ContactLeads />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
