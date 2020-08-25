import React from 'react';
import defaultImage from '../../assets/images/bird.jpg';

const QuestionImage = ({ image = defaultImage }) => {
  return (
    <div>
      <img className="current-question-section__image" src={image} alt="" />
    </div>
  );
};

export default QuestionImage;
