import { createSlice } from '@reduxjs/toolkit';
import operationsContacts from './contactsOperation';
import { initialState } from './initialsState';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [operationsContacts.getContacts.fulfilled](state, { payload }) {
      state.contacts.items = payload;
    },
    [operationsContacts.createContacts.fulfilled](state, { payload }) {
      state.contacts.items.push(payload);
    },
    [operationsContacts.deleteContacts.fulfilled](state, { payload }) {
      const index = state.contacts.items.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.items.splice(index, 1);
    },
  },
  reducers: {
    filterName: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterName } = contactsSlice.actions;
