// import { Component } from 'react';
// import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//     };
    
//   onChangeInput = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <>
//         <form
//           className={css.formstyle}
//           onSubmit={evt => {
//             evt.preventDefault();
//             this.props.addContact(this.state);
//             this.resetForm();
//           }}
//         >
//           <label className={css.label}>
//             Name
//             <br />
//             <input
//               className={css.input}
//               onChange={this.onChangeInput}
//               value={this.state.name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <br />
//           <label htmlFor="">
//             Number
//             <br />
//             <input
//               className={css.input}
//               onChange={this.onChangeInput}
//               value={this.state.number}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <br />
//           <button className={css.button} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};