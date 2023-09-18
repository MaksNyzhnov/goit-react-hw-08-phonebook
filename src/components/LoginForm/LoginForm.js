import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './LoginForm.module.css';
import { login } from 'redux/auth/auth-operations';

const mailInputId = nanoid(5);
const passwordInputId = nanoid(5);
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <label htmlFor={mailInputId}>E-mail</label>
      <input
        type="email"
        id={mailInputId}
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        type="password"
        id={passwordInputId}
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
