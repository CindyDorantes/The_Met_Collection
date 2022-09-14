import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import artworkReducer from './artwork/artwork';
import departmentReducer from './departments/departments';

const rootReducer = combineReducers({
  departments: departmentReducer,
  artwork: artworkReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
