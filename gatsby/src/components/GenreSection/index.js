import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import CardCollection from '../CardCollection';
import Card from '../Card';

import styles from './styles.module.scss';

const GenreSection = ({ title, items }) => {
  return (
    <>
      <Heading classes={styles.genreHeading} headingLevel={2}>
        {title}
      </Heading>
      <CardCollection>
        {items.map(({ node }) => (
          <Card
            key={node.id}
            path={node.path.alias}
            title={node.title}
            image={node.relationships.mainImage.localFile.childImageSharp.fluid}
            rating={node.rating}
            description={node.subtitle}
            subtitle={node.subtitle}
            stars={node.stars}
          >
          </Card>
        ))}
      </CardCollection>
    </>
  );
};

export default GenreSection;

GenreSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
