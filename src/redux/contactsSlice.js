import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './requests';

// const getLocalSt = () => {
//   const parsed = JSON.parse(localStorage.getItem('contactlist'));
//   if (parsed) {
//     return [...parsed];
//   }
//   return [];
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload);
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

// export const { addC, deleteC } = contactsSlice.actions;

export default contactsSlice.reducer;
