/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './styles/ArtworkDetails.module.css';

const ArtworkDetails = (props) => {
  const { artwork } = props;

  return (
    <div className={styles.mainContainer}>
      <h4>Artwork Details</h4>
      <div className={styles.detailsContainer}>
        <div className={styles.item}>
          <p className={styles.bold}>Title:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.title}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Artist:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.artistDisplayName}
            &nbsp;(&nbsp;
            <i>{artwork.artistDisplayBio}</i>
            &nbsp;)
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Date:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.objectDate}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Culture:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.culture}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Medium:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.medium}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Dimensions:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.dimensions}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.bold}>Classifications:&nbsp;</p>
          <p className={styles.answer}>
            {artwork.classification}
          </p>
        </div>
        <div className={styles.item}>
          <p>
            <BsArrowRightCircle />
            &nbsp;&nbsp;
            <a href={artwork.objectURL} className={styles.learn}>Learn more...</a>
          </p>
        </div>
      </div>
    </div>
  );
};

ArtworkDetails.propTypes = { artwork: PropTypes.object.isRequired };

export default ArtworkDetails;
