import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth/index';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 35,
  },
  button: {
    width: '80px',
    height: '30px',
    fontSize: '15px',
    fontWeight: 700,
    color: '#2A363B',
    backgroundColor: 'rgb(231, 89, 70, 0.4)',
    borderRadius: '5px',
    border: '1px solid gray',
    cursor: 'pointer',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="avatar" width="50" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logoutUser())}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
}
