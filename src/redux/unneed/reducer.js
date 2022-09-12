// import { createReducer } from '@reduxjs/toolkit';
// import { filter, add, deleteC } from './actions';

// export const contactsReducer = createReducer([], {
//   [add]: (state, { payload }) => [...state, payload],
//   [deleteC]: (state, { payload }) => state.filter(elem => elem.id !== payload),
// });

// export const contactsFilter = createReducer('', {
//   [filter]: (state, { payload }) => {
//     const filterredArray = state.filter(
//       ({ name }) => name.toLowerCase().indexOf(payload.toLowerCase()) > -1
//     );
//     return filterredArray;
//   },
// });
