import React from 'react';
import PropTypes from 'prop-types';

import HeaderTitle from '../header-title/header-title';
import HeaderScore from '../header-score/header-score';
import QuestionList from '../questions-list/questions-list';

import './header.scss';

const Header = ({ title, score, listItems }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <HeaderTitle title={title} />
        <HeaderScore score={score} />
      </div>
      <QuestionList listItems={listItems} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
