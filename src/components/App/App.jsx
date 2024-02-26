import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
// import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { useAuth } from '../../hooks';
// import css from './App.module.css';

import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import Loader from '../Loader/Loader';
// import SectionContactForm from '../SectionContactForm/SectionContactForm';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  // <Layout>
  //   <div className={css.wrapForm}>
  //     <h1 className={css.title}>PHONEBOOK</h1>
  //     <SectionContactForm />
  //   </div>

  //   <div className={css.wrapContacts}>
  //     <h2 className={css.title}>Contacts</h2>
  //     <SearchBox />
  //     {isLoading && !error && <Loader />}
  //     {error && <ErrorMessage />}
  //     <ContactList />
  //   </div>

  //   <Toaster position="top-right" />
  // </Layout>
}
