import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
