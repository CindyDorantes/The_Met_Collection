/* eslint react/prop-types: 0 */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineMuseum } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import styles from './styles/Navbar.module.css';
import DepartmentDropdown from './DepartmentDropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.navbarCont}>
      <header className={styles.navHeader}>
        <p className={styles.home}>
          <NavLink to="/">
            <IoIosArrowBack />
            <MdOutlineMuseum />
          </NavLink>
        </p>
        <nav className={styles.navBar}>
          <ul>
            <li
              onClick={() => setDropdown(!dropdown)}
            >
              <NavLink to="/">
                Select Department&nbsp;
                <IoIosArrowDown className={styles.arrowDown} />
              </NavLink>
              {dropdown && <DepartmentDropdown />}
            </li>
          </ul>
        </nav>
        <div className={styles.headerTitle}>
          <p className={styles.navIcons}>
            <FaMicrophone />
          </p>
          <p className={styles.navIcons}>
            <BsGearFill />
          </p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
