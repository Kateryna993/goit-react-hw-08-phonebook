import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './Views.module.css';

// const styles = {
//   form: {
//     width: 480,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.regFormTitle}>Registration Page</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.registrationForm}
        autoComplete="off"
      >
        <label className={styles.regFormLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={styles.regFormInput}
          />
        </label>

        <label className={styles.regFormLabel}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styles.regFormInput}
          />
        </label>

        <label className={styles.regFormLabel}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={styles.regFormInput}
          />
        </label>

        <button type="submit" className={styles.regFormBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}
