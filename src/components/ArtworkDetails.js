/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ArtworkDetails.module.css';

const ArtworkDetails = (props) => {
  const { artwork } = props;

  return (
    <div className={styles.mainContainer}>
      <h4>Artwork Details</h4>
      <div className={styles.detailsContainer}>
        <div className={styles.leftDetails}>
          <p>
            <span className={styles.bold}>Title:&nbsp;</span>
            {artwork.title}
          </p>
          <p>
            <span className={styles.bold}>Artist:&nbsp;</span>
            {artwork.artistDisplayName}
            <span>
              {artwork.artistDisplayBio}
            </span>
          </p>
          <p>
            <span className={styles.bold}>Date:&nbsp;</span>
            {artwork.objectDate}
          </p>
          <p>
            <span className={styles.bold}>Culture:&nbsp;</span>
            {artwork.culture}
          </p>
        </div>
        <div className={styles.rigthDetails}>
          <p>
            <span className={styles.bold}>Medium:&nbsp;</span>
            {artwork.medium}
          </p>
          <p>
            <span className={styles.bold}>Dimensions:&nbsp;</span>
            {artwork.dimensions}
          </p>
          <p>
            <span className={styles.bold}>Classifications:&nbsp;</span>
            {artwork.classification}
          </p>
          <p>
            <a href={artwork.objectURL}>Learn more...</a>
          </p>
        </div>
      </div>
    </div>
  );
};

ArtworkDetails.propTypes = { artwork: PropTypes.object.isRequired };

export default ArtworkDetails;
