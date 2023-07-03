import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { ContactsStyle } from 'components/App.styled';

//
import operationsContacts from 'redux/contacts/contactsOperation';
import { useDispatch } from 'react-redux';
// import operations from 'redux/auth/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsContacts.getContacts());
    // .unwrap()
    // .catch(() => {
    //   operations.logOut();
    // });
  }, [dispatch]);
  return (
    <ContactsStyle>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="contactsContainer">
          <div>
            <h1 className="title">Phonebook</h1>
            <ContactForm />
          </div>
          <div>
            <h2 className="subtitle">Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    </ContactsStyle>
  );
}
