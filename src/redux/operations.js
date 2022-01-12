import {
  fetchAllProducts,
  fetchAddProduct,
  fetchDeleteProduct,
  fetchUpdateProduct,
} from '../services/productsAPI';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
} from './actions';

export const fetchProducts = () => dispatch => {
  dispatch(fetchRequest());

  fetchAllProducts()
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

export const addProduct =
  (id, name, count, weight, width, height) => dispatch => {
    const product = {
      id,
      name,
      count,
      weight,
      size: {
        width,
        height,
      },
    };
    dispatch(addProductRequest());

    fetchAddProduct(product)
      .then(({ data }) => dispatch(addProductSuccess(data)))
      .catch(error => dispatch(addProductError(error)));
  };

export const deleteProduct = id => dispatch => {
  dispatch(deleteProductRequest());
  fetchDeleteProduct(id)
    .then(() => dispatch(deleteProductSuccess(id)))
    .catch(error => dispatch(deleteProductError(error)));
};

export const updateProduct =
  (id, { name, count, weight, width, height }) =>
  dispatch => {
    const update = {
      name,
      count,
      weight,
      size: {
        width,
        height,
      },
    };

    dispatch(updateProductRequest());
    fetchUpdateProduct(id, update)
      .then(({ data }) => dispatch(updateProductSuccess(data)))
      .catch(error => dispatch(updateProductError(error)));
  };
