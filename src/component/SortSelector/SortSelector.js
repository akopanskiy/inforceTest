import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { sortProduct } from '../../redux/actions';

const SortSelector = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('');

  const sortOptions = [
    { value: '', label: '' },
    { value: 'name', label: 'За назвою' },
    { value: 'count', label: 'за кількістю' },
  ];
  const SortOrderChange = order => {
    dispatch(sortProduct(order));
    setSortOrder(order);
  };

  return (
    <select value={sortOrder} onChange={e => SortOrderChange(e.target.value)}>
      {sortOptions.map(option => (
        <option key={option.value} value={option.value}>
          Сортування: {option.label}
        </option>
      ))}
    </select>
  );
};
export default SortSelector;
