import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import { IoIosCall, IoMdPersonAdd } from 'react-icons/io';
import css from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is requried'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is requried'),
});

const initialValues = { id: '', email: '', password: '' };

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  function handleSubmit({ email, password }, actions) {
    dispatch(logIn({ email, password }));
    toast.success('You have successfully logged into your account!');
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <label htmlFor={emailFieldId} className={css.label}>
            <IoIosCall size="24" />
            Email
          </label>
          <Field className={css.field} type="email" name="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.div}>
          <label htmlFor={passwordFieldId} className={css.label}>
            <IoIosCall size="24" />
            Password
          </label>
          <Field className={css.field} type="password" name="password" id={passwordFieldId} />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>

        <button className={css.btn} type="submit">
          <IoMdPersonAdd className={css.svg} />
          Log In
        </button>
      </Form>
    </Formik>
  );
}
