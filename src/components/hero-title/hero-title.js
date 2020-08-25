import React from 'react';
import './hero-title.scss';

const HeroTitle = ({ name = '******' }) => {
  return <p className="current-question-section__hero-title">{name}</p>;
};

export default HeroTitle;
