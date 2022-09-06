/* eslint react/prop-types: 0 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbarCont}>
    <header className={styles.navHeader}>

      <div className={styles.headerTitle}>
        <p className={styles.navTitle}>THE MET</p>
      </div>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink to="/">Departments</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Navbar;
