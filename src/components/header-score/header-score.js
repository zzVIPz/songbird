import React from 'react';

const Score = ({ scoreText, currentScore }) => {
  return (
    <div>
      {scoreText}
      <span>{currentScore}</span>
    </div>
  );
};

export default Score;
