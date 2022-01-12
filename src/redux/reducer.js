import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchSuccess,
  addProductSuccess,
  deleteProductSuccess,
  updateProductSuccess,
  sortProduct,
} from './actions';

const items = createReducer([], {
  [fetchSuccess]: (state, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateProductSuccess]: (state, { payload }) =>
    state.map(product => (product.id === payload.id ? payload : product)),
});

const sort = createReducer('', {
  [sortProduct]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({ items, sort });

export default productsReducer;
