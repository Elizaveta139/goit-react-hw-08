import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import toast from 'react-hot-toast';
import validator from 'validator';

import { registerUser } from '../../redux/auth/operations';
import { defaultTheme } from '../defaultSettings';
import css from './RegisterForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is requried'),
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

export default function RegisterForm() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }, actions) {
    dispatch(registerUser({ name, email, password }));
    toast.success(`${name}, you are successfully registered`);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
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
            <Form className={css.form}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: '0 auto' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ margin: '0 auto' }}>
                Sign up
              </Typography>

              <div className={css.div}>
                <Field className={css.field} type="name" name="name" label="Name" as={TextField} />
                <ErrorMessage className={css.error} name="name" component="span" />
              </div>

              <div className={css.div}>
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  label="Email"
                  as={TextField}
                />
                <ErrorMessage className={css.error} name="email" component="span" />
              </div>

              <div className={css.div}>
                <Field
                  className={css.field}
                  type="password"
                  name="password"
                  label="Password"
                  as={TextField}
                />
                <ErrorMessage className={css.error} name="password" component="span" />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, height: 50, fontSize: 20, boxShadow: 0 }}
                className={css.btn}
              >
                Sign Up
              </Button>

              <NavLink className={css.navLog} to="/login">
                Already have an account? Sign in
              </NavLink>
            </Form>
          </Box>
        </Container>
      </ThemeProvider>
    </Formik>
  );
}
