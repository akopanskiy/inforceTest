import { createAction } from '@reduxjs/toolkit';

export const fetchRequest = createAction('products/fetchRequest');
export const fetchSuccess = createAction('products/fetchSuccess');
export const fetchError = createAction('products/fetchError');

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

export const deleteProductRequest = createAction(
  'products/deleteProductRequest',
);
export const deleteProductSuccess = createAction(
  'products/deleteProductSuccess',
);
export const deleteProductError = createAction('products/deleteProductError');

export const updateProductRequest = createAction(
  'products/updateProductRequest',
);
export const updateProductSuccess = createAction(
  'products/updateProductSuccess',
);
export const updateProductError = createAction('products/updateProductError');

export const sortProduct = createAction('products/sort');
