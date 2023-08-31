import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/reducer';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={style.contact_item}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
