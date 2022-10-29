import PropTypes from 'prop-types';
import React from 'react';
export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
