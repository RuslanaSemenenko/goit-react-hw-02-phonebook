// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import { v4 as uuidv4 } from 'uuid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import css from './App.module.css';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   handleNameChange = e => {
//     this.setState({ name: e.target.value });
//   };

//   handleNumberChange = e => {
//     this.setState({ number: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { contacts, name, number } = this.state;

//     if (!name.trim() || !number.trim()) {
//       return;
//     }

//     const contact = { id: uuidv4(), name, number };
//     this.setState({ contacts: [...contacts, contact], name: '', number: '' });
//   };

//   render() {
//     const { contacts, name, number } = this.state;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleNameChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.handleNumberChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//         <h2>Contacts</h2>
//         <ContactList contacts={contacts} />
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

// export default App;

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = task => {
    const searchSameName = this.state.contacts
      .map(cont => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: uuidv4(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {visibleContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}