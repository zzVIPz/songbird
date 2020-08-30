import React from 'react';
import { INITIAL_VALUE } from '../../constants/constants';
import './answer-item.scss';

const AnswerItem = ({ name, id, clicked, selectedBirdIndex, isCorrectAnswerGet }) => {
  const { symbol } = INITIAL_VALUE;
  let classNames = 'answer-section__symbol';
  if (clicked && !isCorrectAnswerGet) {
    if (id - 1 === selectedBirdIndex) {
      classNames = `${classNames} answer-section__symbol_correct`;
    } else {
      classNames = `${classNames} answer-section__symbol_incorrect`;
    }
  }

  return (
    <span className="answer-section__text">
      <span className={classNames}>{symbol}</span>
      {name}
    </span>
  );
};
export default AnswerItem;
