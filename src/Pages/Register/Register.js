import { NavLink } from 'react-router-dom';
import Section from 'components/Section/Section';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Section title="Sign up">
      <RegisterForm></RegisterForm>
      <p>Already have an account?</p>
      <NavLink to={'/login'}>Log in</NavLink>
    </Section>
  );
};

export default Register;
