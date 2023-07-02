import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { contactSelector } from 'redux/contacts/selectors';
import { Report } from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { ContactFormStyle } from 'components/App.styled';
import operationsContacts from 'redux/contacts/contactsOperation';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactSelector);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleNameChange = event => {
    const { name: nameTarget, value } = event.target;
    switch (nameTarget) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const isInclude = contacts.items.find(contact => contact.name === name);
    if (isInclude) {
      Report.info(name + ' Is already in contacts!');
      return;
    }
    dispatch(operationsContacts.createContacts({ name, number }));
    setName('');
    setNumber('');
  };
  let nameId = nanoid();
  let numberId = nanoid();
  return (
    <ContactFormStyle>
      <form onSubmit={handleSubmit} number={number} name={name}>
        <label className="formLabel" htmlFor={nameId}>
          Name
          <input
            className="formInput"
            id={nameId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          />
        </label>
        <label className="formLabel" htmlFor={numberId}>
          Number
          <input
            className="formInput"
            id={numberId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNameChange}
          />
        </label>
        <button className="formBtn" type="submit">
          Add contact
        </button>
      </form>
    </ContactFormStyle>
  );
}
