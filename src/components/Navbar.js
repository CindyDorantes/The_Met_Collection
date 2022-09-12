/* eslint react/prop-types: 0 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import { MdOutlineMuseum } from 'react-icons/md';
import styles from './styles/Navbar.module.css';
import DepartmentDropdown from './DepartmentDropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.navbarCont}>
      <header className={styles.navHeader}>
        <p className={styles.home}>
          <NavLink to="/">
            <MdOutlineMuseum />
          </NavLink>
        </p>
        {/* <div className={styles.headerTitle}>
          <p className={styles.navTitle}>
            THE MET
          </p>
        </div> */}
        <nav className={styles.navBar}>
          <ul>
            <li
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Select Department&nbsp;&nbsp;
              <BiDownArrow />
              {dropdown && <DepartmentDropdown />}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
