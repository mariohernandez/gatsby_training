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
    <Element className={styles.newHeading}>
      {url ? (
        <Link to={url}>{children}</Link>
      ):(
      {children}
      )}
    </Element>
  );
};

Heading.propTypes = {
  /** Tag level. Defaults to 2 */
  headingLevel: PropTypes.number,
  /** Content of title. */
  text: PropTypes.string,
  children: childrenType
};

Heading.defaultProps = {
  headingLevel: 2
};

export default Heading;
