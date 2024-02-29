import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#d3bdb0',
      main: '#d3bdb0',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d3bdb0',
      main: '#d3bdb0',
      dark: '#d3bdb0',
      contrastText: '#d3bdb0',
    },
  },
});

export const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
};
