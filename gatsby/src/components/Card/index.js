// Import native React & Gatsby resources
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

// Import custom components
import Rating from '../Rating';
import Stars from '../Stars';
import Heading from '../Heading';

// Import custom styles
import styles from './styles.module.scss';

// Import custom PropTypes
import {fluidImage} from '../../global/js/customPropTypes';

const Card = ({ title, path, image, subtitle, rating, stars}) => {
  return (
    <article className={styles.Card}>
      <div className={styles.newCardMedia}>
        <Image fluid={image} />
      </div>
      <div className={styles.newCardContent}>
        <Heading classes={styles.movieTitle} headingLevel={3} url={path}>
          {title}
        </Heading>
        <div className={styles.newCardRating}>
          <Rating rating={rating} classes={styles.rating} />
          <Stars stars={stars} />
        </div>
        <div className={styles.description}>
          {subtitle}
        </div>
      </div>
    </article>
  );
};

export default Card;

// Defining proptypes (data types)
Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  image: fluidImage
};
