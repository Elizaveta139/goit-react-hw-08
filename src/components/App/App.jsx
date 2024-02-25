import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

import Layout from '../Layout/Layout';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader';
import SectionContactForm from '../SectionContactForm/SectionContactForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.wrapForm}>
        <h1 className={css.title}>PHONEBOOK</h1>
        <SectionContactForm />
      </div>

      <div className={css.wrapContacts}>
        <h2 className={css.title}>Contacts</h2>
        <SearchBox />
        {isLoading && !error && <Loader />}
        {error && <ErrorMessage />}
        <ContactList />
      </div>

      <Toaster position="top-right" />
    </Layout>
  );
}
