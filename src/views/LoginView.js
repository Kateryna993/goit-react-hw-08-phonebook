import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './Views.module.css';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.logFormTitle}>Login Page</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.loginForm}
        autoComplete="off"
      >
        <label className={styles.logFormLabel}>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Email should contain the '@' sign and 2-3 letter after '.' sign, as in example: user@mail.com"
            value={email}
            onChange={handleChange}
            className={styles.logFormInput}
          />
        </label>

        <label className={styles.logFormLabel}>
          Password
          <input
            type="password"
            name="password"
            minLength="6"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number and use minimum 6 characters."
            value={password}
            onChange={handleChange}
            className={styles.logFormInput}
          />
        </label>

        <button type="submit" className={styles.logFormBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}
