import { useSelector, useDispatch } from 'react-redux';
// import Fuse from 'fuse.js';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filtersSlice';
// import { selectVisibleContacts } from '../../redux/selectors';

import css from './SearchBox.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  // const contacts = useSelector(selectVisibleContacts);

  // const fuseOptions = {
  //   keys: ['name', 'phone'],
  // };

  // const fuse = new Fuse(contacts, fuseOptions);
  // const results = fuse.search(value);
  // console.log('results', results);
  // const result = results.map(result => result.item);
  // console.log('hjhjh', result);

  function handleChangeFilter(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <div className={css.inputWrap}>
      <label className={css.label}>
        <IoIosSearch size="26" />
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="name"
        value={value.name}
        onChange={handleChangeFilter}
        placeholder="Please enter a name to search"
      />
    </div>
  );
}
