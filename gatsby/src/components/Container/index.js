import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const Container = ({ classes, children }) => {
  return (
    <div className={cn(styles.container, { [classes]: classes })}>
      {children}
    </div>
  );
};

export default Container;
