import React from 'react';
import './Favorites.css';
import FavoriteCard from '../FavoriteCard/FavoriteCard';


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
