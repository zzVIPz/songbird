import React from 'react';

import { INITIAL_VALUE } from '../../constants/constants';

import HeaderScore from '../header-score/header-score';
import QuestionList from '../questions-list/questions-list';

import './header.scss';

const Header = ({ roundsList, currentScore }) => {
  const { titleText, scoreText } = INITIAL_VALUE;
  return (
    <header className="header">
      <div className="header__title">
        <h1>{titleText}</h1>
        <HeaderScore {...{ scoreText, currentScore }} />
      </div>
      <QuestionList listItems={roundsList} />
    </header>
  );
};

export default Header;
