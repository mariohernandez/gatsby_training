import React from 'react';
import PropTypes from 'prop-types';

import Eyebrow from '../Eyebrow';
import CardCollection from '../CardCollection';
import Card from '../Card';

import styles from './styles.module.scss';

const GenreSection = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <Eyebrow>{title}</Eyebrow>
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
    </section>
  );
};

export default GenreSection;

GenreSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
