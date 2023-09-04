import axios from 'axios';

const BASE_URL = 'https://64f079088a8b66ecf779bb2a.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`${BASE_URL}`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}
