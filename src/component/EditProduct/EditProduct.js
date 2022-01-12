import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/operations';
import shortid from 'shortid';
import Modal from '../Modal';
import styles from './Edit.module.css';

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [count, setCount] = useState(product.count);
  const [width, setWidth] = useState(product.size.width);
  const [height, setHeight] = useState(product.size.height);
  const [weight, setWeight] = useState(product.weight);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const nameId = shortid.generate();
  const countId = shortid.generate();
  const widthId = shortid.generate();
  const heightId = shortid.generate();
  const weightId = shortid.generate();

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'count':
        setCount(value);
        break;
      case 'width':
        setWidth(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateProduct(product.id, { name, count, width, height, weight }));
    toggleModal();
    setName(name);
    setCount(count);
    setWidth(width);
    setHeight(height);
    setWeight(weight);
  };

  return (
    <>
      <button className={styles.editBtn} type="button" onClick={toggleModal}>
        Edit
      </button>
      {showModal && (
        <Modal>
          <form onSubmit={handleSubmit}>
            <label htmlFor={nameId}>
              <div className={styles.divLabel}>
                <span>Name................</span>
                <input
                  placeholder={product.name}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  id={nameId}
                  autoComplete="off"
                />
              </div>
            </label>
            <label htmlFor={countId}>
              <div className={styles.divLabel}>
                <span>Count................</span>
                <input
                  placeholder={product.count}
                  type="number"
                  name="count"
                  value={count}
                  onChange={handleChange}
                  id={countId}
                  autoComplete="off"
                />
              </div>
            </label>
            <label htmlFor={widthId}>
              <div className={styles.divLabel}>
                <span>Width................</span>
                <input
                  placeholder={product.size.width}
                  type="number"
                  name="width"
                  value={width}
                  onChange={handleChange}
                  id={widthId}
                  autoComplete="off"
                />
              </div>
            </label>
            <label htmlFor={heightId}>
              <div className={styles.divLabel}>
                <span>Height...............</span>
                <input
                  placeholder={product.size.height}
                  type="number"
                  name="height"
                  value={height}
                  onChange={handleChange}
                  id={heightId}
                  autoComplete="off"
                />
              </div>
            </label>
            <label htmlFor={weightId}>
              <div className={styles.divLabel}>
                <span>Weigh...............</span>
                <input
                  placeholder={product.weight}
                  type="text"
                  name="weight"
                  value={weight}
                  onChange={handleChange}
                  id={weightId}
                  autoComplete="off"
                />
              </div>
            </label>
            <div className={styles.addBtnDiv}>
              <button className={styles.addBtn} type="submit">
                Update
              </button>
            </div>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={toggleModal}
            >
              Close
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default EditProduct;
