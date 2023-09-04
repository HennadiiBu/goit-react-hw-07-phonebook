import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import React, { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import { requestAddContact } from 'redux/operations';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = event => {
    setName(() => event.target.value);
  };

  const handleChangeNumber = event => {
    setPhone(() => event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      phone,
    };

    const isDublicated = contacts.some(
      elem =>
        elem.name.toLowerCase().trim() ===
        newContact.name.toLocaleLowerCase().trim()
    );
    if (isDublicated) {
      return toast.error('Contact is alredy exsist');
    }

    dispatch(requestAddContact(newContact));

    setName(() => '');
    setPhone(() => '');
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
        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={handleChangeNumber}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
