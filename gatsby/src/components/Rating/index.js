import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

const Rating = ({ rating, classes = {} }) => {
  return (
    <div className={classnames(styles.rating, { [classes]: classes })}>
      <span className={styles.text}>Rated:</span>
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
