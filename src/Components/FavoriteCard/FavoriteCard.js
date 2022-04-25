import React from "react";
import "./FavoriteCard.css";
import PropTypes from 'prop-types';

const FavoriteCard = ({ fave }) => {
  return (
    <div className="favorite-card">
      <div className="favorite-card-container">
        <h2 className="single-advice">{fave}</h2>
      </div>
    </div>
  );
};

export default FavoriteCard;

FavoriteCard.propTypes = {
  fave: PropTypes.string.isRequired
}
