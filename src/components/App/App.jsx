import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { useAuth } from '../../hooks';
// import css from './App.module.css';

import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
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
}
