import React, { Component } from 'react';
// import { render } from '@testing-library/react';

import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Container } from './App.styled';
import { ContactList } from '../ContactList/ContactList';

import { Filter } from '../Filter/Filter';
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onVisibleContacts = () => {
    // return this.setState.contacts;
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

// model.id = nanoid();
