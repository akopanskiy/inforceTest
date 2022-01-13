import { useState } from 'react';
import ProductList from './component/ProductList';
import ProductForm from './component/ProductForm';
import Modal from './component/Modal';
import Button from './component/Button';

import styles from './App.module.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Product List</h1>
        <Button
          type={'button'}
          name={'Add product'}
          className={styles.addProductButton}
          onClick={toggleModal}
        />
      </div>

      <ProductList />
      {showModal && (
        <Modal>
          <ProductForm onClick={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default App;
