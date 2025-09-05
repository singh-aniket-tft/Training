import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
    onClick={onClick}
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = React.useState(false);


  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>TinyVerse.ONE</div>

      <button
        className={styles.burger}
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ''}`}>
        <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
        <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
        <NavItem to="/login" onClick={() => setOpen(false)}>Login</NavItem>
        <NavItem to="/form" onClick={() => setOpen(false)}>Form</NavItem>
      </div>
    </nav>
  );
}
