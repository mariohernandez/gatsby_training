import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import Rating from '../Rating';
import Stars from '../Stars';
import Heading from '../Heading';

import styles from './styles.module.scss';

const GridItem = ({
  title,
  path,
  image,
  description,
  rating,
  stars,
  children
}) => {
  return (
    <Link className={styles.gridItem} to={path} tabIndex={1}>
      <Image fluid={image} />
      <div className={styles.details}>
        <div className={styles.detailsInner}>
          <Heading classes={styles.title} level={3} styleLevel={4}>
            {title}
          </Heading>
          <div className={styles.ratingStarsContainer}>
            <Rating rating={rating} classes={styles.rating} />
            <Stars stars={stars} />
          </div>
          <div className={styles.description}>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridItem;

GridItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string
};
