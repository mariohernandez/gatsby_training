import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

const Button = ({ url, children, buttonType, ...rest }) => {
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
  buttonType: PropTypes.oneOf(['primary']),
  children: 'Watch now'
};
