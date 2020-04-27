import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../Container';
import styles from './styles.module.scss';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "logo.svg" }
        }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <Container>
        <Link to="/">
          <img
            className={styles.logo}
            src={data.allFile.nodes[0].publicURL}
            alt={siteTitle}
          />
        </Link>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
