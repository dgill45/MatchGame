import React from 'react';

const Card = ({ card, handleClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? 'flipped' : ''}`}
      onClick={() => handleClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
      </div>
    </div>
  );
};

export default Card;
