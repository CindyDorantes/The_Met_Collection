/* eslint react/prop-types: 0 */
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import DepartmentDropdown from './DepartmentDropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.navbarCont}>
      <header className={styles.navHeader}>
        <div className={styles.headerTitle}>
          <p className={styles.navTitle}>THE MET</p>
        </div>
        <nav className={styles.navBar}>
          <ul>
            <li
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <NavLink to="/">Select Department</NavLink>
              {dropdown && <DepartmentDropdown />}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
