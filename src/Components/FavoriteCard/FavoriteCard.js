import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = ({fave}) => {


  return (
    <div className='favorite-card'>
      <div className='favorite-card-container'>
      <p className='single-advice'>{fave}</p>
      </div>
    </div>
  )
}





export default FavoriteCard;
