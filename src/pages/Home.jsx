// src/pages/Home.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location?.state?.username ?? null;

  // If the page was opened directly without state, optionally redirect to login:
  if (!username) {
    // Option: redirect back to /login after 500ms or show a message
    // navigate('/login'); // uncomment to force redirect
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Home</h1>
      {username ? (
        <p>Hello {username} 👋</p>
      ) : (
        <p>
          Hello — you landed here without logging in.
          <button onClick={() => navigate('/login')} style={{ marginLeft: 8 }}>Go to Login</button>
        </p>
      )}
    </main>
  );
}
