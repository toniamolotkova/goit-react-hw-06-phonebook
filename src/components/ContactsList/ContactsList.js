//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import s from './ContactsList.module.css';
import { deleteContact } from 'redux/actions';

const ContactsList = () => {
  
  const getFilteredContacts = (state) => {
    const { items, filter } = state.contacts;
     const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter),
    );
  }

  const contacts = useSelector(state => getFilteredContacts(state));
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  


  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   )
// }

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allTodos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// //   onToggleCompleted: () => null,
// });

export default ContactsList;
