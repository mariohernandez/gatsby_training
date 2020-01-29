import React from 'react';
import PropTypes from 'prop-types';

import { childrenType } from '../../global/js/customPropTypes';

import styles from './style.module.scss';

const Details = ({ children }) => {
  return (
    <div
      className={styles.details}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
};

export default Details;

Details.propTypes = {
  children: childrenType
};
