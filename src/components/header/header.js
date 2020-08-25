import React from 'react';

import HeaderTitle from '../header-title/header-title';
import HeaderScore from '../header-score/header-score';
import QuestionList from '../questions-list/questions-list';

import './header.scss';

const Header = ({ titleText, scoreText, roundsList, currentScore }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <HeaderTitle {...{ titleText }} />
        <HeaderScore {...{ scoreText, currentScore }} />
      </div>
      <QuestionList listItems={roundsList} />
    </header>
  );
};

export default Header;
