import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { IoPersonAddSharp } from 'react-icons/io5';

import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { defaultTheme } from '../defaultSettings';

import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This field is requried').min(3, 'Too Short!').max(50, 'Too Long!'),
  number: Yup.string()
    .required('This field is requried')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(6, 'Must be at least 6 digits'),
});

const initialValues = { id: '', name: '', number: '' };

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function onSubmit({ name, number }, actions) {
    const newContact = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      actions.resetForm();
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    toast.success(`Contact ${name} successfully added`);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <ThemeProvider theme={defaultTheme}>
        <Form className={css.form}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: '0 auto' }}>
            <IoPersonAddSharp />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ margin: '0 auto' }}>
            Adding a Contact
          </Typography>

          <div className={css.div}>
            <Field
              className={css.field}
              type="text"
              name="name"
              label="Name"
              id={nameFieldId}
              as={TextField}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.div}>
            <Field
              className={css.field}
              type="tel"
              name="number"
              label="Number"
              id={numberFieldId}
              as={TextField}
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, height: 50, fontSize: 20, boxShadow: 0 }}
          >
            Sign Up
          </Button>

          {/* <button className={css.btn} type="submit">
            Add contact
          </button> */}
        </Form>
      </ThemeProvider>
    </Formik>
  );
}
