/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ArtworkDetails = (props) => {
  const { artwork } = props;

  return (
    <div>
      <h4>Artwork Details</h4>
      <div>
        <p>
          Title:
          {artwork.title}
        </p>
        <p>
          Artist:
          {artwork.artistDisplayName}
          <span>
            {artwork.artistDisplayBio}
          </span>
        </p>
        <p>
          Date:
          {artwork.objectDate}
        </p>
        <p>
          Culture:
          {artwork.culture}
        </p>
      </div>
      <div>
        <p>
          Medium:
          {artwork.medium}
        </p>
        <p>
          Dimensions:
          {artwork.dimensions}
        </p>
        <p>
          Classifications:
          {artwork.classification}
        </p>
        <p>
          <a href={artwork.objectURL}>Learn more...</a>
        </p>
      </div>
    </div>
  );
};

ArtworkDetails.propTypes = { artwork: PropTypes.object.isRequired };

export default ArtworkDetails;
