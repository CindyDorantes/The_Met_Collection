import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getArtwork } from '../redux/artwork/artwork';
import DepartmentItem from './DepartmentItem';

const DepartmentContainer = () => {
  const dispatch = useDispatch();
  const resolvePath = useLocation().pathname;
  const navDepartments = useSelector((state) => state.departments);

  useEffect(() => {
    let depID = '';
    navDepartments.map((department) => {
      if (department.path === resolvePath) {
        depID = department.departmentId;
      }
      return depID;
    });
    console.log('dispatch getArtwork');
    dispatch(
      getArtwork(
        depID,
      ),
    );
  }, [resolvePath]);

  return (
    <div>
      <div>
        <h1>The Metropolitan Museum of Art Collection</h1>
        <h2>
          {navDepartments.map((department) => {
            let depTitle = '';
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
