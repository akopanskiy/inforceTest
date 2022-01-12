import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/operations';
import { getSortProducts } from '../../redux/selectors';

import styles from './ProductList.module.css';
import Dropdown from '../Dropdown';
import SortSelector from '../SortSelector';

const ProductList = () => {
  const dispatch = useDispatch();
  const sortProducts = useSelector(getSortProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <SortSelector />

      <ul className={styles.item}>
        {sortProducts.map(product => (
          <li className={styles.productItem} key={product.id}>
            <h2>Name: {product.name}</h2>

            <Dropdown id={product.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
