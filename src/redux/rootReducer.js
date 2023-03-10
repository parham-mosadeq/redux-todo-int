import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { todosReducer } from './todos/todosReducer';

export const store = configureStore({
  reducer: {
    todosState: todosReducer,
  },
  middleware: [logger],
});
