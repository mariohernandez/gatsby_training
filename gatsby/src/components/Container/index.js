import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

const Container = ({ classes, children }) => {
  return (
    <div className={classnames(styles.container, { [classes]: classes })}>
      {children}
    </div>
  );
};

export default Container;
