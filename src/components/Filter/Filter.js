import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { filterChange } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    const text = event.target.value;
    dispatch(filterChange({ text }));
  };
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.section__input}
        type="text"
        placeholder="Enter name here"
        value={filter}
        onChange={onFilterChange}
      ></input>
    </>
  );
};

export default Filter;
