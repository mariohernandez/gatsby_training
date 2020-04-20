import React, { useState } from 'react';
import propTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useEffect } from 'react';

const AddToFavorite = ({ id }) => {
  const [favorites, setFavorites] = useState([]);

  // Set initial state from localStorage.
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    // Empty dependency array means this only one once (on mount).
  }, []);

  useEffect(() => {
    // Then add the resulting local state to the localStorage array whenever
    // the 'favorites' local state changes.
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Flag stored for repeated access.
  const isFavorite = favorites.includes(id);

  const clickFavButton = () => {
    if (!isFavorite) {
      // If it's not already a favorite, add it to the local state array.
      setFavorites(favorites.concat(id));
    } else {
      // Otherwise, remove it from the local state array.
      setFavorites(favorites.filter((item) => item !== id));
    }
    // Note: these trigger the 'favorites' useEffect above.
  };

  // Toggle heart icon and text on favorite state.
  const HeartIcon = isFavorite ? FaHeart : FaRegHeart;
  const buttonLabel = isFavorite ? 'Favorited!' : 'Add to Favorites';

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={clickFavButton}>
        <HeartIcon
          className={classnames(styles.icon, {
            [styles.favorited]: isFavorite
          })}
        />
        <span>{buttonLabel}</span>
      </button>
    </div>
  );
};

export default AddToFavorite;

AddToFavorite.propTypes = {
  // movie id string
  id: propTypes.string
};
