import React from 'react';

import styles from './styles.module.scss';

const CardCollection = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardcollection}>{children}</div>
    </div>
  );
};

export default CardCollection;
