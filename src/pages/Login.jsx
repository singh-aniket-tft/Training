// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.scss'; // adjust path if needed

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Replace this with your real auth check (API call, etc.)
  const checkPassword = (username, password) => {
    // Example: accept password "secret123" for any username.
    return password === 'secret123';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (checkPassword(username, password)) {
      // navigate to /home and pass username via state
      navigate('/home', { state: { username } });
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <main style={{ padding: 24, maxWidth: 540 }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 6 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 6 }}
          />
        </div>

        {error && (
          <div style={{ color: 'crimson', marginBottom: 12 }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={{ padding: '8px 14px' }}>Submit</button>
        </div>
      </form>
    </main>
  );
}
