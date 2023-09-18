import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { getUsername } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  return (
    <div className={css.user_menu}>
      <p>{name}</p>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
