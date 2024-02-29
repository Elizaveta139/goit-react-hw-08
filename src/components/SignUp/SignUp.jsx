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
import { ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import validator from 'validator';

import { registerUser } from '../../redux/auth/operations';
import { defaultTheme } from '../defaultSettings';
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

export default function SignUp() {
  const dispatch = useDispatch();

  function onSubmit({ name, email, password }, actions) {
    console.log(actions);
    dispatch(registerUser({ name, email, password }));
    toast.success(`${name}, you are successfully registered`);
    actions.resetForm();
  }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <ThemeProvider theme={defaultTheme}>
        <Form className={css.form}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <div className={css.div}>
            <Field className={css.field} type="text" name="name" label="Name" as={TextField} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.div}>
            <Field className={css.field} type="tel" name="number" label="Number" as={TextField} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Form>
      </ThemeProvider>
    </Formik>
    // <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    //   <ThemeProvider theme={defaultTheme}>
    //     <Container component="main" maxWidth="xs">
    //       <CssBaseline />
    //       <Box
    //         sx={{
    //           marginTop: 8,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign up
    //         </Typography>
    //         <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
    //           <Grid container spacing={2}>
    //             <Grid item xs={12}>
    //               <TextField
    //                 required
    //                 autoComplete="name"
    //                 name="name"
    //                 pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                 fullWidth
    //                 id="firstName"
    //                 label="Name"
    //                 autoFocus
    //                 {...register('name')}
    //                 error={errors.name ? true : false}
    //               />
    //               <Typography variant="inherit" color="textSecondary">
    //                 {errors.name?.message}
    //               </Typography>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 required
    //                 fullWidth
    //                 id="email"
    //                 label="Email Address"
    //                 name="email"
    //                 // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    //                 autoComplete="email"
    //                 {...register('email')}
    //                 error={errors.email ? true : false}
    //               />
    //               <Typography variant="inherit" color="textSecondary">
    //                 {errors.email?.message}
    //               </Typography>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 required
    //                 fullWidth
    //                 name="password"
    //                 pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
    //                 label="Password"
    //                 type="password"
    //                 id="password"
    //                 autoComplete="new-password"
    //                 {...register('password')}
    //                 error={errors.password ? true : false}
    //               />
    //               <Typography variant="inherit" color="textSecondary">
    //                 {errors.password?.message}
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    //             Sign Up
    //           </Button>
    //           <Grid container justifyContent="flex-end">
    //             <Grid item>
    //               <NavLink className={css.navLog} to="/login">
    //                 Already have an account? Sign in
    //               </NavLink>
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Box>
    //     </Container>
    //   </ThemeProvider>
    // </Formik>
  );
}

////////////////////////////////////////////////////////////////////////////////////////
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import TextField from '@mui/material/TextField';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useDispatch } from 'react-redux';
// import validator from 'validator';
// import { yupResolver } from '@hookform/resolvers/yup';
// import toast from 'react-hot-toast';
// import { useForm } from 'react-hook-form';
// import { NavLink } from 'react-router-dom';
// import { registerUser } from '../../redux/auth/operations';
// import * as Yup from 'yup';
// import css from './SignUp.module.css';

// const defaultTheme = createTheme({
//   palette: {
//     primary: {
//       light: '#d3bdb0',
//       main: '#d3bdb0',
//       dark: '#000',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#d3bdb0',
//       main: '#d3bdb0',
//       dark: '#d3bdb0',
//       contrastText: '#d3bdb0',
//     },
//   },
// });

// export default function RegistrationForm() {
//   const dispatch = useDispatch();

//   const initialValues = { id: '', name: '', email: '', password: '' };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .required('This field is requried')
//       .min(3, 'Min 3 characters!')
//       .max(50, 'Too Long!'),
//     email: Yup.string()
//       .email('Invalid email format')
//       .required('This field is requried')
//       .test(value => validator.isEmail(value)),
//     password: Yup.string()
//       .required('This field is requried')
//       .min(7, 'Min of 7 characters')
//       .max(50, 'Too Long!'),
//   });

//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   dispatch(registerUser(values));
//   //   setSubmitting(false);
//   // };

//   function onSubmit({ name, email, password }, actions) {
//     console.log(actions);
//     dispatch(registerUser({ name, email, password }));
//     toast.success(`${name}, you are successfully registered`);
//     // actions.resetForm();
//   }

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   return (
//     <div>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         <ThemeProvider theme={defaultTheme}>
//           {' '}
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 width: '100%',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign up
//               </Typography>

//               <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
//                 <Form className={css.form}>
//                   <Grid container spacing={2} sx={{ mt: 3, mb: 2 }}>
//                     {' '}
//                     <div className={css.div}>
//                       <Grid item xs={12}>
//                         {/* <TextField variant="outlined" label="Email" type="email" /> */}
//                         <Field
//                           name="name"
//                           label="Name"
//                           as={TextField}
//                           fullWidth
//                           margin="normal"
//                           variant="outlined"
//                           {...register('name')}
//                           error={errors.name ? true : false}
//                           // InputProps={{
//                           //   startAdornment: <AccountCircle />,
//                           // }}
//                         />
//                         <Typography variant="inherit" color="textSecondary">
//                           {errors.password?.message}
//                         </Typography>
//                         {/* <ErrorMessage name="name" component="div" /> */}
//                       </Grid>
//                     </div>
//                     <div className={css.div}>
//                       <Grid item xs={12}>
//                         {/* <TextField variant="outlined" label="Email" type="email" /> */}
//                         <Field
//                           name="email"
//                           label="Email"
//                           as={TextField}
//                           fullWidth
//                           margin="normal"
//                           variant="outlined"
//                           id="email"
//                           {...register('email')}
//                           error={errors.email ? true : false}
//                           // InputProps={{
//                           //   startAdornment: <AccountCircle />,
//                           // }}
//                         />
//                         <Typography variant="inherit" color="textSecondary">
//                           {errors.email?.message}
//                         </Typography>
//                         {/* <ErrorMessage name="email" component="div" /> */}
//                       </Grid>
//                     </div>
//                     <div className={css.div}>
//                       <Grid item xs={12}>
//                         {/* <TextField variant="outlined" label="Email" type="email" /> */}
//                         <Field
//                           name="password"
//                           label="Password"
//                           as={TextField}
//                           fullWidth
//                           margin="normal"
//                           variant="outlined"
//                           {...register('password')}
//                           error={errors.password ? true : false}
//                           // InputProps={{
//                           //   startAdornment: <AccountCircle />,
//                           // }}
//                         />

//                         <Typography variant="inherit" color="textSecondary">
//                           {errors.password?.message}
//                         </Typography>
//                         {/* <ErrorMessage name="password" component="div" /> */}
//                       </Grid>
//                     </div>
//                   </Grid>
//                   <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//                     Sign Up
//                   </Button>
//                   <Grid container justifyContent="flex-end">
//                     <Grid item>
//                       <NavLink className={css.navLog} to="/login">
//                         Already have an account? Sign in
//                       </NavLink>
//                     </Grid>
//                   </Grid>
//                 </Form>
//               </Box>
//             </Box>
//           </Container>
//         </ThemeProvider>
//       </Formik>
//     </div>
//   );
// }
