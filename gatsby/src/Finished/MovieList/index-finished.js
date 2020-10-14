import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import Card from '../Card';

import styles from './styles.module.scss';

const MovieList = ({ title, items }) => {
  return (
    <section className={styles.movieList}>
      <div className={styles.movieListGenre}>
        <Heading classes={styles.genreHeading} headingLevel={2}>
          {title}
        </Heading>
      </div>
      <div className={styles.movieListItems}>
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
      </div>
    </section>
  );
};

export default MovieList;

MovieList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
