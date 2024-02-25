import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import css from './ContactForm.module.css';
import { IoIosContact, IoIosCall, IoMdPersonAdd } from 'react-icons/io';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is requried'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(6, 'Must be at least 6 digits')
    // .typeError('It doesn`t look like a phone number')
    .required('This field is requried'),
});

const initialValues = { id: '', name: '', phone: '' };

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit({ name, phone }, actions) {
    const newContact = {
      name,
      phone,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      actions.resetForm();
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} successfully added`);
    actions.resetForm();
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(addContact(event.target.elements.text.value));
  //   form.reset();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <label htmlFor={nameFieldId} className={css.label}>
            <IoIosContact size="24" />
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.div}>
          <label htmlFor={numberFieldId} className={css.label}>
            <IoIosCall size="24" />
            Number
          </label>
          <Field className={css.field} type="tel" name="phone" id={numberFieldId} />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>

        <button className={css.btn} type="submit">
          <IoMdPersonAdd className={css.svg} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
