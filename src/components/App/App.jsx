import React, { Component } from 'react';
// import { render } from '@testing-library/react';

import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Container } from './App.styled';
import { ContactList } from '../ContactList/ContactList';
import contacts from './contacts.json';
const contactID = nanoid();

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    // console.log(data);
    console.log(name);
    console.log(number);

    const contact = {
      id: { contactID },
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state);
  };

  onVisibleContacts = () => {
    // return this.setState.contacts;
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    // console.log(contacts);

    // const visibleContacts = this.onVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

// model.id = nanoid();
