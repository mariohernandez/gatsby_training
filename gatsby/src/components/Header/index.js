import { Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from 'gatsby-image';

import Container from '../Container';
import Heading from '../Heading';

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
  console.log(data);

  return (
    <header className={styles.header}>
      <Container>
        <Link to="/">
          <img
            className={styles.logo}
            src={data.allFile.nodes[0].publicURL}
            alt="Nitflex logo"
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
