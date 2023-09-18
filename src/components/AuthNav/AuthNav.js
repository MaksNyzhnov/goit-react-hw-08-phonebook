import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.headerLinks}>
      <NavLink className={css.headerLink} to="/login">
        Log in
      </NavLink>
      <NavLink className={css.headerLink} to="/register">
        Sign up
      </NavLink>
    </nav>
  );
};

export default AuthNav;
