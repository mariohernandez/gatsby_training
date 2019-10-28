import React from 'react';
import Image from 'gatsby-image';

import Heading from '../Heading';

import styles from './styles.module.scss';

const Hero = ({ title, image }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Heading classes={styles.title} level={1}>
            {title}
          </Heading>
        </div>
        <Image fluid={image}></Image>
      </div>
    </div>
  );
};

export default Hero;
