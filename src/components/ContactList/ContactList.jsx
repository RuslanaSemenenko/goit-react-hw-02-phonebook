// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// export const ContactList = ({ contacts, delContact }) => {
//   return (
//     <ul className={css.list}>
//       {contacts.map(contact => {
//         return (
//           <li className={css.item} key={contact.id}>
//             <span>{contact.name}:</span>
//             <span className={css.number}>{contact.number}</span>
//             <button
//               className={css.button}
//               type="button"
//               onClick={() => {
//                 delContact(contact.id);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   delContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map(contact => (
      <li className={styles.TaskList_item} key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
