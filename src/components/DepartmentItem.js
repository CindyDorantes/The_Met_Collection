/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const DepartmentItem = (props) => {
  const { artwork } = props;

  return (
    <div>
      <div className="imgItem"><img src={artwork.primaryImageSmall} alt="alt" /></div>
      <h2>{artwork.title}</h2>
      <h3>{artwork.artistDisplayName}</h3>
    </div>
  );
};

DepartmentItem.propTypes = { artwork: PropTypes.object.isRequired };

export default DepartmentItem;
