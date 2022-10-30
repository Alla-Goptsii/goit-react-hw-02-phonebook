import React from 'react';
// import s from './Filter.styled.js';
// import PropTypes from 'prop-types';

export const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />{' '}
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
