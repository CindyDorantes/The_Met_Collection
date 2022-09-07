import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DepartmentItem from './DepartmentItem';

const DepartmentContainer = () => {
  const resolvePath = useLocation().pathname;
  const navDepartments = useSelector((state) => state.departments);

  return (
    <div>
      <div>
        <h1>The Metropolitan Museum of Art Collection</h1>
        <h2>
          {navDepartments.map((department) => {
            let depTitle = '';
            console.log('Deparment', department.pathname);
            console.log('Path', resolvePath);
            if (department.path === resolvePath) {
              depTitle = department.displayName;
              return depTitle;
            }
            return depTitle;
          })}
        </h2>
      </div>
      <DepartmentItem />
    </div>
  );
};

export default DepartmentContainer;
