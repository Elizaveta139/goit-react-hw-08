import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
