import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import Heading from '../Heading';
import Stars from '../Stars';
import Button from '../Button';
import Rating from '../Rating';

import styles from './styles.module.scss';

import {fluidImage} from '../../global/js/customPropTypes';

const Hero = ({ title, subtitle, image, rating, stars, path }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Link to={path} className={styles.link}>
            <Heading classes={styles.title} level={1}>
              {title}
            </Heading>
          </Link>

          <Heading classes={styles.subtitle} level={2} styleLevel={4}>
            {subtitle}
          </Heading>
          <div className={styles.starAndRatingContainer}>
            <Rating rating={rating} classes={styles.rating} />
            <Stars stars={stars} />
          </div>
          <Button buttonType="primary">Watch Now</Button>
        </div>
        <Image fluid={image}></Image>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rating: PropTypes.string,
  stars: PropTypes.number,
  image: fluidImage,
  path: PropTypes.string
};
