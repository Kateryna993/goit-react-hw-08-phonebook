import React from 'react';
import { FcContacts } from 'react-icons/fc';
import styles from './Views.module.css';
import bgImage from '../images/bgimg-homeview.jpg';

export const HomeView = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homeTitle}>
        Welcome to the&nbsp;
        <span className={styles.highlightedText}>PhoneBook App</span>&nbsp;- you
        can manage your contacts here!
        <FcContacts />
      </h1>
      <img alt="" src={bgImage} className={styles.bgImage}></img>
    </div>
  );
};
