import axios from 'axios';

const URL = 'http://localhost:3000/';

export const fetchAllProducts = () => {
  return axios.get(`${URL}products`);
};

export const fetchAddProduct = product => {
  return axios.post(`${URL}products`, product);
};

export const fetchDeleteProduct = id => {
  return axios.delete(`${URL}products/${id}`);
};

export const fetchProductById = id => {
  return axios.get(`${URL}products/${id}`);
};

export const fetchUpdateProduct = (id, product) => {
  return axios.put(`${URL}products/${id}`, product);
};
