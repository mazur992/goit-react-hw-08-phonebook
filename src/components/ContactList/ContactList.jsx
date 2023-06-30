import { useSelector, useDispatch } from 'react-redux';
import {
  contactSelector,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import css from './ContactList.module.css';
import operationsContacts from 'redux/contacts/contactsOperation';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactSelector);
  const visibleContacts = useSelector(selectVisibleContacts);

  const delContact = contactId => {
    dispatch(operationsContacts.deleteContacts(contactId), [dispatch]);
  };

  return (
    <ul>
      {contacts.isLoading && <p>Loading...</p>}
      {visibleContacts.map(item => {
        return (
          <li className={css.contactItem} key={item.id}>
            {item.name}: {item.number}
            <button
              className={css.contactBtn}
              type="button"
              onClick={() => delContact(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
