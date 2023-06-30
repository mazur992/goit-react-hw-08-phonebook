import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import css from '../../components/App.module.css';

//
import operationsContacts from 'redux/contacts/contactsOperation';
import { useDispatch } from 'react-redux';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsContacts.getContacts());
  }, [dispatch]);
  // const handleClick = () => {
  //   dispatch(operationsContacts.getContacts());
  // };
  // const handleClickAdd = () => {
  //   dispatch(
  //     operationsContacts.createContacts({
  //       name: 'Jacob fray',
  //       number: '761-23-96',
  //     })
  //   );
  // };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <button
        style={{
          height: '25px',
          width: '60px',
          marginLeft: '20px',
          color: 'black',
        }}
        onClick={handleClick}
      >
        dispatch
      </button>
      <button
        style={{
          height: '25px',
          width: '60px',
          marginLeft: '20px',
          color: 'black',
        }}
        onClick={handleClickAdd}
      >
        dispatch
      </button> */}
      <div className={css.appContainer}>
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
        </div>
        <div>
          <h2 className={css.subtitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
