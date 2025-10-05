import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Proizvodi & Usluge',
      links: [
        { name: 'Obroci', path: '/meals' },
        { name: 'Pića', path: '/drinks' },
        { name: 'Oprema', path: '/supplies' },
      ],
    },
    {
      title: 'Pomoć',
      links: [
        { name: 'Informacije o dostavi', path: '/delivery' },
        { name: 'Služba za korisnike', path: '/customer-service' },
      ],
    },
    {
      title: 'Podrška',
      links: [
        { name: 'Status porudžbine', path: '/order-status' },
        { name: 'Online prodavnica', path: '/shop' },
        { name: 'Česta pitanja', path: '/faqs' },
      ],
    },
    {
      title: 'Nalog',
      links: [
        { name: 'Prijava', path: '/login' },
        { name: 'Registracija', path: '/register' },
        { name: 'Podešavanja privatnosti', path: '/privacy' },
      ],
    },
    {
      title: 'O nama',
      links: [
        { name: 'Informacije o kompaniji', path: '/about' },
        { name: 'Kontakt', path: '/contact' },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        {sections.map((sec) => (
          <div key={sec.title} className={styles.section}>
            <h4>{sec.title}</h4>
            <ul>
              {sec.links.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} FoodSpot. Sva prava zadržana.
      </div>
    </footer>
  );
};

export default Footer;