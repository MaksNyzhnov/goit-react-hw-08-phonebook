import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ redirectTo = '/contacts', restricted = false }) => {
  const { token } = useSelector(state => state.auth);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo}></Navigate>
  ) : (
    <Outlet></Outlet>
  );
};

export default PublicRoute;
