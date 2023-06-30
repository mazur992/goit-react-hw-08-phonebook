import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    console.log('Error!');
  }
});
const createContacts = createAsyncThunk(
  'contacts/create',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);

      return data;
    } catch (error) {
      console.log('Error!');
    }
  }
);
const deleteContacts = createAsyncThunk('contacts/delete', async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);

    return data;
  } catch (error) {
    console.log('Error!');
  }
});
const operationsContacts = {
  getContacts,
  createContacts,
  deleteContacts,
};

export default operationsContacts;
