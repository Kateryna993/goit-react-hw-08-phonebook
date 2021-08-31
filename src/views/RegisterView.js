import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './Views.module.css';

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
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
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
            required
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Email should contain the '@' sign and 2-3 letter after '.' sign, as in example: user@mail.com"
            onChange={handleChange}
            className={styles.regFormInput}
          />
        </label>

        <label className={styles.regFormLabel}>
          Password
          <input
            type="password"
            name="password"
            required
            minLength="6"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number and use minimum 6 characters."
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
