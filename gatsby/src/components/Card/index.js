// Import native React elements
import React from 'react';
import { Link } from 'gatsby';
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

const Card = ({
  title,
  path,
  image,
  subtitle,
  rating,
  stars
}) => {
  return (
    <Link className={styles.Card} to={path} tabIndex={1}>
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
            {subtitle}
          </div>
        </div>
      </div>
    </Link>
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
