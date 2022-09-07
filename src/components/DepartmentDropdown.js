/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/DepartmentDropdown.css';

const DepartmentDropdown = () => {
  const navDepartments = useSelector((state) => state.departments);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <ul
        className={dropdown ? 'submenu clicked' : 'submenu'}
        onClick={() => setDropdown(!dropdown)}
      >
        {navDepartments.map((department) => (
          <li key={department.departmentId} className="navDepartment">
            <NavLink
              to={department.path}
              className="navlink"
              onClick={() => setDropdown(false)}
            >
              {department.displayName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDropdown;
