import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filtersSlice';
import { defaultTheme } from '../defaultSettings';

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
      <ThemeProvider theme={defaultTheme}>
        <Typography component="h2" variant="h6" className={css.label}>
          <IoIosSearch size="24" /> Search contacts by name and phone number
        </Typography>
        <TextField
          variant="outlined"
          label=""
          type="name"
          value={filter.query}
          onChange={handleSearch}
          className={css.input}
        />
      </ThemeProvider>
    </div>
  );
}
