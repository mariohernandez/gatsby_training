import React from 'react';

import styles from './styles.module.scss';

const Grid = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default Grid;
