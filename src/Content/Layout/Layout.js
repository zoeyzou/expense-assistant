import React from 'react';

import styles from './Layout.css';

const Layout = ({header, children, footer}) => {
  return (
    <div className={styles.Layout}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
};

export default Layout;
