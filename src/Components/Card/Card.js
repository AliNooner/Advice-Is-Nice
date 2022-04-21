import React from 'react';
import './Card.css';
import { Route } from 'react-router-dom';


const Card = ({singleAdvice}) => {

  return (
    <div className='card'>
      <div className='card-container'>
      <p className='single-advice'>{singleAdvice}</p>
      <button className='save-favorites-button' >Save to favorites</button>
      </div>
    </div>

  )
}





export default Card;
