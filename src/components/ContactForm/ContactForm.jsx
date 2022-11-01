import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';

const nameID = nanoid();
const numberID = nanoid();

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
    // this.reset();
  };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={nameID}>
          Name
          <input
            type="text"
            name="name"
            id={nameID}
            value={this.handleChange.value}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberID}>
          Number
          <input
            type="tel"
            name="number"
            id={this.numberID}
            onChange={this.handleChange}
            pgitattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
