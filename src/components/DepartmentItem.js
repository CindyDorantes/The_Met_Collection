/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './styles/DepartmentItem.module.css';

const DepartmentItem = (props) => {
  const { artwork } = props;

  return (
    <div
      className={styles.artworkContainer}
    >
      <div className={styles.imgItem}>
        <img
          src={artwork.primaryImageSmall}
          alt={styles.artworkTitle}
          className={styles.imgSmall}
        />
      </div>
      <div className={styles.artworkTitle}>
        <h3>{artwork.title}</h3>
        <p><BsArrowRightCircle /></p>
        <h4>{artwork.artistDisplayName}</h4>
      </div>
    </div>
  );
};

DepartmentItem.propTypes = {
  artwork: PropTypes.object.isRequired,
};

export default DepartmentItem;
