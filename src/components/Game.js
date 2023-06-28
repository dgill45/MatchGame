import React, { useState, useEffect } from 'react';
import Card from './Card';

const Game = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Generate initial cards
    const initialCards = generateCards();
    setCards(initialCards);
  }, []);

  const generateCards = () => {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = [];

    for (let i = 0; i < 8; i++) {
      cards.push({ id: i * 2, value: symbols[i], isFlipped: false });
      cards.push({ id: i * 2 + 1, value: symbols[i], isFlipped: false });
    }

    // Shuffle the cards
    return shuffle(cards);
  };

  const shuffle = (array) => {
    // Implementation of Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (id) => {
    // Flip the clicked card
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, isFlipped: true };
        }
        return card;
      })
    );
  };

  return (
    <div className="game">
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Game;
