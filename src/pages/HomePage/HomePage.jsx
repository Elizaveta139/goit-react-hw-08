import css from './HomePage.module.css';
import { Paper, Typography, Box, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Paper className={css.container}>
      <>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Hi! <br />
          Welcome to your phonebook.{' '}
        </Typography>
      </>
      {/* <>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Hello! I`m your phonebook.{' '}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Please log in to your account or register.
          </Typography>
          {/* <Button variant="contained">
              <StyledNavLink to="/login">Sign In</StyledNavLink>
            </Button> */}
      */
    </Paper>
  );
}
