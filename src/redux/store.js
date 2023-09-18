import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
