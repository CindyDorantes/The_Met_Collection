import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import departmentReducer from './departments/departments';

const rootReducer = combineReducers({
  departments: departmentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
