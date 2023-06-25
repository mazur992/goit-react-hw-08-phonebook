import React from 'react';
// import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import css from '../../components/App.module.css';

export default function Contacts() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
