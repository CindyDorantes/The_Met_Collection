import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { getArtwork } from '../redux/artwork/artwork';
import DepartmentItem from './DepartmentItem';
import styles from './styles/DepartmentContainer.module.css';

const DepartmentContainer = () => {
  const dispatch = useDispatch();
  const resolvePath = useLocation().pathname;
  const navDepartments = useSelector((state) => state.departments);
  const artworkData = useSelector((state) => state.artwork);

  useEffect(() => {
    let depID = '';
    navDepartments.map((department) => {
      if (department.path === resolvePath) {
        depID = department.departmentId;
      }
      return depID;
    });
    dispatch(getArtwork(depID));
  }, [resolvePath]);

  return (
    <div className={styles.departmentContainer}>
      <div className={styles.header}>
        <h1>
          The Metropolitan Museum of Art Collection
        </h1>
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
      <div className={styles.itemsContainer}>
        {artworkData.map((artwork) => (
          <NavLink
            to={`/${artwork.objectID}`}
            key={artwork.objectID}
          >
            <DepartmentItem key={artwork.objectID} artwork={artwork} path={resolvePath} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DepartmentContainer;
