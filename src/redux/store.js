import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './filters/filtersSlice';

const store = configureStore({
  reducer: {
    contactList: contactReducer,
    filter: filterReducer
  }
});

export default store;