import axios from 'axios';

const BASE_URL = 'https://64f079088a8b66ecf779bb2a.mockapi.io/contacts';

export async function fetchContacts() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
     } catch (error) {
    console.error(error);
  }
}

export async function addContact({id, name, phone, createdAt}) {
  axios
    .post(`${BASE_URL}`, {
      id,
      name,
      phone,
      createdAt
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function deleteContact(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
