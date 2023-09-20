import Section from 'components/Section/Section';
import LoginForm from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Section title="Log in">
      <LoginForm></LoginForm>
      <p>Don't have an account yet?</p>
      <NavLink to={'/register'}>Sign up</NavLink>
    </Section>
  );
};

export default Login;
