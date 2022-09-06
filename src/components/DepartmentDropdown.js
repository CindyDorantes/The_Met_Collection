/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/DepartmentDropdown.css';

const DepartmentDropdown = () => {
  const navDepartments = [
    {
      departmentId: 1,
      displayName: 'American Decorative Arts',
      path: '/americandecorativearts',
    },
    {
      departmentId: 3,
      displayName: 'Ancient Near Eastern Art',
      path: '/ancientneareasterart',
    },
    {
      departmentId: 5,
      displayName: 'Arts of Africa, Oceania, and the Americas',
      path: '/artsofafrica',
    },
    {
      departmentId: 8,
      displayName: 'The Costume Institute',
      path: '/thecostumeinstitute',
    },
  ];
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
