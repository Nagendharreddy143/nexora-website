import { createContext, useContext, useState, useEffect } from 'react';
import { jobsData } from '../data/jobs';
import { hotlistData } from '../data/hotlist';

const AdminContext = createContext(null);

function getInitialJobs() {
    try {
        const stored = localStorage.getItem('nexora_jobs');
        return stored ? JSON.parse(stored) : jobsData;
    } catch {
        return jobsData;
    }
}

function getInitialHotlist() {
    try {
        const stored = localStorage.getItem('nexora_hotlist');
        return stored ? JSON.parse(stored) : hotlistData;
    } catch {
        return hotlistData;
    }
}

function getInitialLeads() {
    try {
        const stored = localStorage.getItem('nexora_leads');
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

export function AdminProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem('nexora_admin_auth') === 'true'
    );
    const [jobs, setJobs] = useState(getInitialJobs);
    const [hotlist, setHotlist] = useState(getInitialHotlist);
    const [leads, setLeads] = useState(getInitialLeads);

    useEffect(() => {
        localStorage.setItem('nexora_jobs', JSON.stringify(jobs));
    }, [jobs]);

    useEffect(() => {
        localStorage.setItem('nexora_hotlist', JSON.stringify(hotlist));
    }, [hotlist]);

    useEffect(() => {
        localStorage.setItem('nexora_leads', JSON.stringify(leads));
    }, [leads]);

    const login = (username, password) => {
        if (username === 'admin' && password === 'nexora2024') {
            setIsAuthenticated(true);
            localStorage.setItem('nexora_admin_auth', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('nexora_admin_auth');
    };

    // Jobs CRUD
    const addJob = (job) => {
        const skillsArr = typeof job.skills === 'string'
            ? job.skills.split(',').map(s => s.trim()).filter(Boolean)
            : job.skills;
        const newJob = { ...job, skills: skillsArr, id: Date.now(), postedDate: new Date().toISOString().split('T')[0] };
        setJobs(prev => [newJob, ...prev]);
    };
    const updateJob = (id, data) => {
        const skillsArr = typeof data.skills === 'string'
            ? data.skills.split(',').map(s => s.trim()).filter(Boolean)
            : data.skills;
        setJobs(prev => prev.map(j => j.id === id ? { ...j, ...data, skills: skillsArr } : j));
    };
    const deleteJob = (id) => setJobs(prev => prev.filter(j => j.id !== id));

    // Hotlist CRUD
    const addCandidate = (candidate) => {
        const skillsArr = typeof candidate.skills === 'string'
            ? candidate.skills.split(',').map(s => s.trim()).filter(Boolean)
            : candidate.skills;
        const newC = { ...candidate, skills: skillsArr, id: Date.now() };
        setHotlist(prev => [newC, ...prev]);
    };
    const updateCandidate = (id, data) => {
        const skillsArr = typeof data.skills === 'string'
            ? data.skills.split(',').map(s => s.trim()).filter(Boolean)
            : data.skills;
        setHotlist(prev => prev.map(c => c.id === id ? { ...c, ...data, skills: skillsArr } : c));
    };
    const deleteCandidate = (id) => setHotlist(prev => prev.filter(c => c.id !== id));

    // Leads
    const addLead = (lead) => {
        const newLead = { ...lead, id: Date.now(), submittedAt: new Date().toISOString() };
        setLeads(prev => [newLead, ...prev]);
    };

    return (
        <AdminContext.Provider value={{
            isAuthenticated, login, logout,
            jobs, addJob, updateJob, deleteJob,
            hotlist, addCandidate, updateCandidate, deleteCandidate,
            leads, addLead,
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export const useAdmin = () => useContext(AdminContext);
