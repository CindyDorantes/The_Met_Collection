import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './styles/ArtworkContainer.module.css';
import ArtworkInfo from './ArtworkInfo';
import ArtworkDetails from './ArtworkDetails';

const ArtworkContainer = () => {
  const resolvePath = useLocation().pathname;
  const artworkData = useSelector((state) => state.artwork);
  let artworkItem = {};

  artworkData.map((artwork) => {
    const artworkPath = `/${artwork.objectID}`;
    if (artworkPath === resolvePath) {
      artworkItem = artwork;
    }
    return artworkItem;
  });

  return (
    <div className={styles.container}>
      <p className={styles.department}>{artworkItem.department}</p>
      <ArtworkInfo artwork={artworkItem} />
      <ArtworkDetails artwork={artworkItem} />
    </div>
  );
};

export default ArtworkContainer;
