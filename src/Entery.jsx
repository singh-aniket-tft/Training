// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

// Your components
import Header from './components/header';       
import LoginForm from './components/LoginForm';  
import { Navbar } from './components';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function Entery() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-theme');
  };

  return (
    <BrowserRouter>
      {/* Navbar at top */}
      <Navbar />

      
      <header
        style={{
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        <button onClick={toggleTheme} style={{ padding: '6px 10px' }}>
          Toggle Theme
        </button>
      </header>

      {/* Routing */}
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<LoginForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Entery;




