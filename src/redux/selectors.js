export const getProducts = state => state.products.items;

export const getSort = state => state.products.sort;

export const getSortProducts = state => {
  const products = getProducts(state);
  const sortProd = getSort(state);

  return [...products].sort((a, b) => {
    return sortProd === 'name' ? (a.name > b.name ? 1 : -1) : b.count - a.count;
  });
};
