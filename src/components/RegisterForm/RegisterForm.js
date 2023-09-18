import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from '../LoginForm/LoginForm.module.css';
import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
const nameInputId = nanoid(5);
const mailInputId = nanoid(5);
const passwordInputId = nanoid(5);

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        id={nameInputId}
        name="email"
        value={name}
        onChange={handleNameChange}
        required
      />
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegisterForm;
