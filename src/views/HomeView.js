import React from 'react';
import { FcContacts } from 'react-icons/fc';
import { IconContext } from 'react-icons';
// import ContactsIcon from '@material-ui/icons/Contacts';
import styles from './Views.module.css';
import bgImage from '../images/bgimg-homeview.jpg';

export const HomeView = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.textWrapper}>
        <div>
          <h1 className={styles.homeTitle}>
            Welcome to the&nbsp;
            <span className={styles.highlightedText}>PhoneBook App, </span>
            <br /> where you can store and manage your contacts
            <IconContext.Provider
              value={{
                size: '35px',
                style: { verticalAlign: 'middle' },
              }}
            >
              <FcContacts className={styles.contactsBookIcon} />
            </IconContext.Provider>
          </h1>
        </div>
      </div>

      <img alt="" src={bgImage} className={styles.bgImage}></img>
    </div>
  );
};
