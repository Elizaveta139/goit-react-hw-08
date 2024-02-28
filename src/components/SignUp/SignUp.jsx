import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import { registerUser } from '../../redux/auth/operations';
import css from './SignUp.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is requried')
    .min(3, 'Min 3 characters!')
    .max(50, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is requried')
    .test(value => validator.isEmail(value)),
  password: Yup.string()
    .required('This field is requried')
    .min(7, 'Min of 7 characters')
    .max(50, 'Too Long!'),
});

const initialValues = { id: '', name: '', email: '', password: '' };

const defaultTheme = createTheme({
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

export default function SignUp() {
  const dispatch = useDispatch();

  // function onSubmit({ name, email, password }, actions) {
  //   dispatch(registerUser({ name, email, password }));
  //   const data = new FormData({ name, email, password });
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //   toast.success(`${name}, you are successfully registered`);
  //   actions.resetForm();
  // }

  function onSubmit({ name, email, password }, actions) {
    console.log(actions);
    dispatch(registerUser({ name, email, password }));
    toast.success(`${name}, you are successfully registered`);
    // actions.resetForm();
  }
  // const onSubmit = event => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    autoComplete="name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    fullWidth
                    id="firstName"
                    label="Name"
                    autoFocus
                    {...register('name')}
                    error={errors.name ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    autoComplete="email"
                    {...register('email')}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register('password')}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink className={css.navLog} to="/login">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    </Formik>
  );
}
