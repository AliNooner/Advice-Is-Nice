import React from 'react';
import './Card.css';
import { Route } from 'react-router-dom';


const Card = ({singleAdvice, addFavorites, displayAdvice}) => {

const saveToFavorites = () => {
  const newAdvice = {
    singleAdvice: singleAdvice
  }
  addFavorites(newAdvice)
}

  return (
    <div className='card'>
      <div className='card-container'>
        <div className='single-advice-container'>
          <p className='single-advice'>{singleAdvice}</p>
        </div>
        <div className='button-container'>
          <button className='advice-button' onClick={displayAdvice}>Give Me Advice</button>
          <button className='save-favorites-button' onClick={() => saveToFavorites()} >Save to favorites</button>
        </div>
      </div>
    </div>

  )
}





export default Card;
