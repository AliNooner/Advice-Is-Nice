import React from 'react';
import './Favorites.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import PropTypes from 'prop-types';


const Favorites = ({favorites}) => {
  const favoriteCards = favorites.map(fave => {
    return (
        <FavoriteCard fave={fave.singleAdvice}/>
    )
  })

  return <div className='favorite-cards'>
    {!favorites.length && <h2 className='no-saved'>You have no favorites yet! Click the Home button to view and save your favorite advice.</h2>}
    {favoriteCards}
  </div>
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired
}
