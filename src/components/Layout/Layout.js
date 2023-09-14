import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import Container from 'components/Container/Container';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/UserMenu/UserMenu';
const Layout = () => {
  return (
    <Container>
      <header className={css.header}>
        <Nav />
        <AuthNav />
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
