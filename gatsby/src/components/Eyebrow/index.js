import React from 'react';
import Heading from '../Heading';

import styles from './styles.module.scss';

const Eyebrow = ({ children }) => {
  return (
    <Heading classes={styles.eyebrow} level={3} styleLevel={4}>
      {children}
    </Heading>
  );
};

export default Eyebrow;
