import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productsReducer from './reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
