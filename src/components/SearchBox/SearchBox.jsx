import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filtersSlice';

import css from './SearchBox.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.inputWrap}>
      <label className={css.label}>
        <IoIosSearch size="26" />
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="name"
        value={filter.query}
        onChange={handleSearch}
        placeholder="Please enter a name to search"
      />
    </div>
  );
}
