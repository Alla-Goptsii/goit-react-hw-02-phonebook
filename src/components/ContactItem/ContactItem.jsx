// import PropTypes from 'prop-types';
import React from 'react';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <p>
        {name}:{number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
