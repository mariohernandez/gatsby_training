import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
const numbers = [0, 1, 2, 3, 4];

const buildStars = (stars) => {
  const starList = [];
  for (let i = 0; i < numbers.length; i++) {
    starList.push(<Star key={i} active={i <= stars} />);
  }
  return starList;
};

const Star = ({ active }) => (
  <li
    className={classnames(styles.star, {
      [styles.active]: active
    })}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
    >
      <polygon points="15,0 11.3,11.2 0,11.5 9,18.6 5.7,30 15,23.2 24.3,30 21,18.6 30,11.5 18.7,11.2 15,0 " />
      <polyline
        points="15,5.2 17.2,11.7 17.5,12.8 18.7,12.8 25.5,13 20,17.4 19.1,18 19.4,19.1 21.4,25.9 16,21.9
    15,21.2 14,21.9 8.6,25.9 10.6,19.1 10.9,18 10,17.4 4.5,13 11.3,12.8 12.5,12.8 12.8,11.7 15,5.2 "
      />
    </svg>
  </li>
);
const Stars = ({ stars }) => {
  return (
    <div className={styles.starsContainer}>
      <ul className={styles.stars}>{buildStars(stars)}</ul>
      <p className={styles.text}>{`Average Rating: ${stars} out of 5 stars`}</p>
    </div>
  );
};

export default Stars;
