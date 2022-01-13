import Modal from '../Modal';
import EditProduct from '../EditProduct';
import Button from '../Button';
import styles from './Dropdown.module.css';

import { deleteProduct } from '../../redux/operations';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../../services/productsAPI';

const Dropdown = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductById(id).then(res => setProduct(res.data));
  }, [id]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const toggleDropdown = () => {
    setVisible(prev => !prev);
  };

  return (
    <>
      <Button
        type={'button'}
        name={visible ? 'Приховати' : 'Показати'}
        className={styles.dropBtn}
        onClick={toggleDropdown}
      />

      {visible && product.id === id && (
        <div className={styles.dropdown}>
          <img src={product.imageUrl} alt="Тут шось має бути" />
          <h3>Count: {product.count}</h3>
          <h3>Size</h3>
          <h4>Width: {product.size.width}</h4>
          <h4>Height: {product.size.height}</h4>
          <h3>Weight: {product.weight}</h3>

          <div className={styles.blockBtn}>
            <Button
              type={'button'}
              name={'Delete'}
              className={styles.deleteBtn}
              onClick={toggleModal}
            />

            {showModal && (
              <Modal>
                <h2>Ви справді бажаєте видалити продукт?</h2>
                <div className={styles.deleteModalBtn}>
                  <Button
                    type={'button'}
                    name={'Yes'}
                    className={styles.deleteBtn}
                    onClick={() => dispatch(deleteProduct(product.id))}
                  />

                  <Button
                    type={'button'}
                    name={'Nit'}
                    onClick={toggleModal}
                    className={styles.editBtn}
                  />
                </div>
              </Modal>
            )}
            <EditProduct product={product} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
