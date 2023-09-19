import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import css from './Layout.module.css';
import Container from 'components/Container/Container';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <header className={css.header}>
        <Nav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
