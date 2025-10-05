import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Početna', path: '/' },
    { name: 'Galerija', path: '/gallery' },
    { name: 'Prodavnica', path: '/shop' },
    { name: 'Kontakt', path: '/contact' },
    { name: 'Prijava', path: '/login' },
    { name: 'Profil', path: '/profile' },
  ];

  const handleToggle = () => setOpenMenu((prev) => !prev);

return (
    <header className={styles.navbar}>
      <div className={styles.brand} onClick={() => navigate('/')}>
        <div className={styles.iconCircle}>🍔</div>
        <h1 className={styles.brandText}>FoodSpot</h1>
      </div>

      <button
        className={styles.menuToggle}
        onClick={handleToggle}
        aria-label="Otvori meni"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.linksContainer} ${openMenu ? styles.showMenu : ''}`}
      >
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? styles.active : undefined
                }
                onClick={() => setOpenMenu(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className={styles.loginButton}
          onClick={() => {
            setOpenMenu(false);
            navigate('/login');
          }}
        >
          Prijavi se
        </button>
      </nav>
    </header>
  );
};

export default Navbar;