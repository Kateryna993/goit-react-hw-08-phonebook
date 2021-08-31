import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth/index';
import styles from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.userMenuContainer}>
      <img
        src={avatar}
        alt="avatar"
        width="35"
        className={styles.userMenuAvatar}
      />
      <span className={styles.userMenuName}>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logoutUser())}
        className={styles.userMenuBtn}
      >
        Logout
        <RiLogoutBoxRLine className={styles.userMenuIcon} />
      </button>
    </div>
  );
}
