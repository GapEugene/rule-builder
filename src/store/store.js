import { configureStore } from '@reduxjs/toolkit';
import groupsReducer from './slices/groupSlice';

const store = configureStore({
  reducer: {
    groups: groupsReducer,
  },
});

export default store;
