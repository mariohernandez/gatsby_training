import React from 'react';
import Image from 'gatsby-image';
import styles from './styles.module.scss';

const Hero = ({ image }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <Image fluid={image}></Image>
      </div>
    </div>
  );
};

export default Hero;
