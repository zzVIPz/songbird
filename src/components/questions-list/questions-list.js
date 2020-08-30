import React from 'react';

import './questions-list.scss';

const QuestionList = ({ listItems }) => {
  const questionsList = listItems.map((item) => {
    const { id, active, text } = item;

    const classNames = `questions-list__text${active ? ' questions-list__text_active' : null}`;
    return (
      <li key={id} className="questions-list__item">
        <span className={classNames}>{text}</span>
      </li>
    );
  });
  return (
    <div className="questions-list__container">
      <ul className="questions-list">{questionsList}</ul>
    </div>
  );
};

export default QuestionList;
