import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

// Import custom PropTypes
import {childrenType} from '../../global/js/customPropTypes';

const Button = ({ classes, url, children, buttonType, ...rest }) => {
  const buttonClass = classnames(styles.Button, {
    [styles.primary]: buttonType === 'primary',
  })
  return (
    <>
    {url ? (
      <a className={buttonClass} {...rest} href={url}>{children}</a>
    ):(
      <button className={buttonClass} {...rest}>
        {children}
      </button>
    )}
    </>
  );
};

export default Button;

Button.propTypes = {
  classes: PropTypes.string,
  buttonClass: PropTypes.oneOf(['primary']),
  children: childrenType
};
