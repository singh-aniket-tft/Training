// src/Entery.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // direct import or use { Navbar } from './components'
import Home from './pages/Home';
import Login from './pages/Login';
// import other components (your form) if needed
import LoginForm from './components/LoginForm'; // if you still want it

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
          {/* Keep your original form as default if you want it at '/' */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/form" element={<LoginForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
