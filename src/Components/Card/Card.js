import React from 'react';
import './Card.css';
import { Route } from 'react-router-dom';


const Card = ({singleAdvice, addFavorites}) => {

const saveToFavorites = () => {
  const newAdvice = {
    singleAdvice: singleAdvice
  }
  addFavorites(newAdvice)
}

  return (
    <div className='card'>
      <div className='card-container'>
      <p className='single-advice'>{singleAdvice}</p>
      <button className='save-favorites-button' onClick={() => saveToFavorites()} >Save to favorites</button>
      </div>
    </div>

  )
}





export default Card;
