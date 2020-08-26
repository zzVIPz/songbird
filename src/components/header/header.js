import React from 'react';

import HeaderTitle from '../header-title/header-title';
import HeaderScore from '../header-score/header-score';
import QuestionList from '../questions-list/questions-list';

import './header.scss';

const HeaderContainer = ({ titleText, scoreText, roundsList, currentScore }) => {
  return (
    <>
      <div className="header__title">
        <HeaderTitle {...{ titleText }} />
        <HeaderScore {...{ scoreText, currentScore }} />
      </div>
      <QuestionList listItems={roundsList} />
    </>
  );
};

export default HeaderContainer;
