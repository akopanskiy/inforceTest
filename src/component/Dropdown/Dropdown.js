import Modal from '../Modal';
import EditProduct from '../EditProduct';
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
      <button className={styles.dropBtn} type="button" onClick={toggleDropdown}>
        {visible ? 'Приховати' : 'Показати'}
      </button>

      {visible && product.id === id && (
        <div className={styles.dropdown}>
          <img src={product.imageUrl} alt="Тут шось має бути" />
          <h3>Count: {product.count}</h3>
          <h3>Size</h3>
          <h4>Width: {product.size.width}</h4>
          <h4>Height: {product.size.height}</h4>
          <h3>Weight: {product.weight}</h3>

          <div className={styles.blockBtn}>
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={toggleModal}
            >
              Delete
            </button>
            {showModal && (
              <Modal>
                <h2>Ви справді бажаєте видалити продукт?</h2>
                <button
                  type="button"
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  Yes
                </button>
                <button type="button" onClick={toggleModal}>
                  Nit
                </button>
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
