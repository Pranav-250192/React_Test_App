import React, { useState } from 'react'
import Counter from './Counter'
import FetchTest from './FetchTest'
import FormTest from './FormTest'

export default function App() {
  const [activeTab, setActiveTab] = useState('counter')

  const tabStyle = (id) => ({
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    border: 'none',
    borderBottom: activeTab === id ? '2px solid #6366f1' : '2px solid transparent',
    background: 'none',
    fontWeight: '600',
    color: activeTab === id ? '#6366f1' : '#64748b',
    transition: 'all 0.2s'
  })

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '2rem auto', 
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#1e293b' }}>React Sandbox Testing App</h1>
        <p style={{ color: '#64748b', margin: '0.5rem 0 0 0' }}>Verify your components and logic below.</p>
      </header>

      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #f1f5f9' }}>
        <button style={tabStyle('counter')} onClick={() => setActiveTab('counter')}>Counter</button>
        <button style={tabStyle('fetch')} onClick={() => setActiveTab('fetch')}>API Fetch</button>
        <button style={tabStyle('form')} onClick={() => setActiveTab('form')}>Form Validation</button>
      </nav>

      <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', minHeight: '300px' }}>
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'fetch' && <FetchTest />}
        {activeTab === 'form' && <FormTest />}
      </div>

      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
        React Test Project • Check port in terminal (usually 5173 or 5174)
      </footer>
    </div>
  )
}
