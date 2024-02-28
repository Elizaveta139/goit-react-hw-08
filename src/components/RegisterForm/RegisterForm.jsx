// import { useId } from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import toast from 'react-hot-toast';
// import { registerUser } from '../../redux/auth/operations';

// import { IoIosContact } from 'react-icons/io';
// import { MdEmail } from 'react-icons/md';
// import { RiLockPasswordFill } from 'react-icons/ri';

// import css from './RegisterForm.module.css';
// import SignUp from '../SignUp/SignUp';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is requried'),
//   email: Yup.string()
//     .email()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('This field is requried'),
//   password: Yup.string()
//     .min(7, 'Min of 7 characters')
//     .max(50, 'Too Long!')
//     .required('This field is requried'),
// });

// const initialValues = { id: '', name: '', email: '', password: '' };

// export default function RegisterForm() {
//   // const nameFieldId = useId();
//   // const emailFieldId = useId();
//   // const passwordFieldId = useId();

//   const dispatch = useDispatch();

//   function handleSubmit({ name, email, password }, actions) {
//     dispatch(registerUser({ name, email, password }));
//     toast.success(`${name}, you are successfully registered`);
//     actions.resetForm();
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <SignUp />
//       {/* <Form className={css.form}> */}
//       {/* <div className={css.div}>
//           <label htmlFor={nameFieldId} className={css.label}>
//             <IoIosContact size="24" />
//             Name
//           </label>
//           <Field className={css.field} type="text" name="name" id={nameFieldId} />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>

//         <div className={css.div}>
//           <label htmlFor={emailFieldId} className={css.label}>
//             <MdEmail size="24" />
//             Email
//           </label>
//           <Field className={css.field} type="email" name="email" id={emailFieldId} />
//           <ErrorMessage className={css.error} name="email" component="span" />
//         </div>

//         <div className={css.div}>
//           <label htmlFor={passwordFieldId} className={css.label}>
//             <RiLockPasswordFill size="24" />
//             Password
//           </label>
//           <Field className={css.field} type="password" name="password" id={passwordFieldId} />
//           <ErrorMessage className={css.error} name="password" component="span" />
//         </div>

//         <button className={css.btn} type="submit">
//           Sign up
//         </button> */}
//       {/* </Form> */}
//     </Formik>
//   );
// }
