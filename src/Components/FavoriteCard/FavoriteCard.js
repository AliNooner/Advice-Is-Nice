import React from "react";
import "./FavoriteCard.css";

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
