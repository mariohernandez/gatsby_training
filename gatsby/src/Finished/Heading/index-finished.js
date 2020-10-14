import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

import { childrenType } from '../../global/js/customPropTypes';
import styles from './styles.module.scss';

const Heading = ({
  headingLevel,
  url,
  children
}) => {
  const Element = `h${headingLevel}`;
  return (
    <Element className={styles.Heading}>
      {{url} ? <Link to={url}>{children}</Link> : {children}}
    </Element>
  );
};

export default Heading;

Heading.propTypes = {
  headingLevel: PropTypes.number,
  text: PropTypes.string,
  children: childrenType
};

Heading.defaultProps = {
  headingLevel: 4
};
