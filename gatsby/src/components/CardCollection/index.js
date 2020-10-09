import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CardCollection = ({ children }) => {
  return (
    <section className={styles.cardCollection}>
      {children}
    </section>
  );
};

export default CardCollection;

CardCollection.propTypes = {
  children: PropTypes.array
};
