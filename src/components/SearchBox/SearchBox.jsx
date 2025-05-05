import styles from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles['search-box']}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
        autoCapitalize="none"
        autoCorrect="off"
      />
    </div>
  );
}
