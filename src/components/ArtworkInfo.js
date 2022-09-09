/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ArtworkInfo = (props) => {
  const { artwork } = props;

  return (
    <div>
      <div>
        <h1>{artwork.title}</h1>
        <h3>{artwork.objectDate}</h3>
        <p>{artwork.artistDisplayName}</p>
      </div>
      <div>
        <img src={artwork.primaryImage} alt={artwork.title} />
      </div>
    </div>
  );
};

ArtworkInfo.propTypes = { artwork: PropTypes.object.isRequired };

export default ArtworkInfo;
