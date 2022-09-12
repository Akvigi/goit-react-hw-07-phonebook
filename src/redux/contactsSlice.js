import { createSlice } from '@reduxjs/toolkit';

const getLocalSt = () => {
  const parsed = JSON.parse(localStorage.getItem('contactlist'));
  if (parsed) {
    return [...parsed];
  }
  return [];
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: getLocalSt(),
  reducers: {
    addC: {
      reducer: (state, { payload }) => {
        return [...state, payload];
      },
    },
    deleteC: (state, { payload }) => {
      return state.filter(elem => elem.id !== payload);
    },
  },
});

export const { addC, deleteC } = contactsSlice.actions;

export default contactsSlice.reducer;
