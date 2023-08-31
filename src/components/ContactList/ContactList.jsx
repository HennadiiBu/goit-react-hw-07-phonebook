import React, { useEffect } from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { requestContacts } from 'redux/reducer';
import { getContacts, getFilter } from 'redux/selectors';
import { requestDeleteContact } from 'redux/DeleteContactReducer';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getVisibleContacts = () => {
    if (!contacts) return;
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter)
    );
  };
  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={style.contact_item}>
              {name}: {phone}
              <button
                type="button"
                onClick={() => {
                  dispatch(requestDeleteContact(id));
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
