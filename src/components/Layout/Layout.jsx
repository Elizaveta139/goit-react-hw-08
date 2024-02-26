import css from './Layout.module.css';

// export default function Layout({ children }) {
//   return <main className={css.container}>{children}</main>;
// }

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
