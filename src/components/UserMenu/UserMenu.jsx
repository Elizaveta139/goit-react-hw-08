import { useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.user.name}!</p>

      <button className={css.btnLogout} type="button" onClick={() => dispatch(logOut())}>
        <MdExitToApp size="24" />
        LOG OUT
      </button>
    </div>
  );
}
