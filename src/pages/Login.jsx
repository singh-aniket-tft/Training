import React from 'react';

export default function Login() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <form style={{ maxWidth: 360 }}>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Email
          <input type="email" style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Password
          <input type="password" style={{ width: '100%', padding: 8, marginTop: 6 }} />
        </label>
        <button type="submit" style={{ padding: '8px 14px', marginTop: 8 }}>Sign in</button>
      </form>
    </main>
  );
}
