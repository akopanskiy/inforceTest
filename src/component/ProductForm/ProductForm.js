import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/operations';
import shortid from 'shortid';
import styles from './ProductForm.module.css';

const ProductForm = ({ onClick }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState('');
  const dispatch = useDispatch();

  const nameId = shortid.generate();
  const countId = shortid.generate();
  const widthId = shortid.generate();
  const heightId = shortid.generate();
  const weightId = shortid.generate();
  const id = shortid.generate();

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
    dispatch(addProduct(id, name, count, weight, width, height));
    onClick();
    setName('');
    setCount(0);
    setWidth(0);
    setHeight(0);
    setWeight('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          <div className={styles.divLabel}>
            <span>Name................</span>
            <input
              type="text"
              name="name"
              value={name}
              required
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
              type="number"
              name="count"
              value={count}
              required
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
              type="number"
              name="width"
              value={width}
              required
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
              type="number"
              name="height"
              value={height}
              required
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
              type="text"
              name="weight"
              value={weight}
              required
              onChange={handleChange}
              id={weightId}
              autoComplete="off"
            />
          </div>
        </label>
        <div className={styles.addBtnDiv}>
          <button className={styles.addBtn} type="submit">
            Add contact
          </button>
        </div>
        <button className={styles.closeBtn} type="button" onClick={onClick}>
          Close
        </button>
      </form>
    </>
  );
};

export default ProductForm;
