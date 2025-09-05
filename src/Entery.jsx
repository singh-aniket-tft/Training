// src/Entery.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home';
import Login from './pages/Login';

import LoginForm from './components/LoginForm'; 

export default function Entery() {
  return (
    <BrowserRouter>
      <Navbar />

      <main style={{ padding: 16 }}>
        <Routes>
          {/* Use /login for the login page that navigates to /home */}
          <Route path="/login" element={<Login />} />
          {/* Home reads username from navigation state */}
          <Route path="/home" element={<Home />} />
          
          <Route path="/" element={<LoginForm />} />
          <Route path="/form" element={<LoginForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
