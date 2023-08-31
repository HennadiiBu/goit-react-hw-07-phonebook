import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findContact } from 'redux/reducer';
import { getFilter } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(findContact(event.target.value.toLowerCase().trim()));
  };

  return (
    <div>
      {' '}
      <p>Find contacts by name</p>
      <input type="text" name="name" value={filter} onChange={handleChange} />
    </div>
  );
}

export default Filter;
