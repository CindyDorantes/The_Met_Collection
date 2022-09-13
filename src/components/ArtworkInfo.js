/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ArtworkInfo.module.css';

const ArtworkInfo = (props) => {
  const { artwork } = props;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={artwork.primaryImage} alt={artwork.title} />
      </div>
      <div className={styles.infoContainer}>
        <h1>{artwork.title}</h1>
        <h3>{artwork.objectDate}</h3>
        <p>{artwork.artistDisplayName}</p>
      </div>
    </div>
  );
};

ArtworkInfo.propTypes = { artwork: PropTypes.object.isRequired };

export default ArtworkInfo;
