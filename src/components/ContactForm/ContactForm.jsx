import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import React, { useState } from 'react';
import { addNewContact } from 'redux/reducer';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(() => event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(() => event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isDublicated = contacts.some(elem => elem.name === newContact.name);
    if (isDublicated) {
      return toast.error('Contact is alredy exsist');
    }

    dispatch(addNewContact(newContact));

    setName(() => '');
    setNumber(() => '');
  };

  return (
    <form onSubmit={handleSubmit} className={style.contacts_form}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeName}
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
