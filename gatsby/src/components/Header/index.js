import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../Container';
import Heading from '../Heading';

import styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Container>
      <Heading level={1} styleLevel={2} classes={styles.heading}>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
