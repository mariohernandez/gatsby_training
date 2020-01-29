import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

import { childrenType } from '../../global/js/customPropTypes';

const CtaButton = ({ classes, children, ...rest }) => {
  return (
    <button
      className={classnames(styles.ctaButton, {
        [`${classes}`]: classes
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CtaButton;

CtaButton.propTypes = {
  classes: PropTypes.string
  children: childrenType
};
