import React from 'react';
import PropTypes from 'prop-types';

import Eyebrow from '../Eyebrow';
import Grid from '../Grid';
import GridItem from '../GridItem';

import styles from './styles.module.scss';

const GenreSection = ({ title, items }) => {
  return (
    <div className={styles.section}>
      <Eyebrow>{title}</Eyebrow>
      <Grid>
        {items.map(({ node }) => (
          <GridItem
            key={node.nid}
            path={node.path.alias}
            title={node.title}
            image={node.relationships.mainImage.localFile.childImageSharp.fluid}
            rating={node.rating}
            description={node.body.value}
            stars={node.stars}
          ></GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default GenreSection;

GenreSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
