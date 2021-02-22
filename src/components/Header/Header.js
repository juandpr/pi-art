import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const isNotHome = pathname !== '/home';
  const headerExtraClass = isNotHome ? styles.headerLeft : styles.headerRight

  return (
    <header className={`${styles.header} ${headerExtraClass}`}>
      Header
    </header>
  )
};

export default Header;
