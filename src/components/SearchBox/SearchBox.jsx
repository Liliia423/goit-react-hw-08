import styles from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles['search-box']}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoCapitalize="none"
        autoCorrect="off"
      />
    </div>
  );
}
