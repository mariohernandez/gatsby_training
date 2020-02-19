import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

import { childrenType } from '../../global/js/customPropTypes';

const CtaButton = ({ classes, url, children, buttonType, ...rest }) => {
  const buttonClass = classnames(styles.ctaButton, {
    [styles.primary]: buttonType === 'primary',
  })
  return (
    <>
    {url ? (
      <a className={buttonClass} {...rest} href={url}>{children}</a>
    ):(
      <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
    )}
    </>
  );
};

export default CtaButton;

CtaButton.propTypes = {
  classes: PropTypes.string,
  buttonClass: PropTypes.oneOf(['primary']),
  children: childrenType
};
