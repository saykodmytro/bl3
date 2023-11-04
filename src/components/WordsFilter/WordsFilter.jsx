import css from './WordsFilter.module.css';

export const WordsFilter = ({ filter, handleFilterChange }) => {
  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
