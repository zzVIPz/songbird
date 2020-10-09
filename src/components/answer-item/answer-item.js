import React from 'react';
import { INITIAL_VALUE } from '../../constants/constants';
import './answer-item.scss';

const AnswerItem = ({ name, clicked, state }) => {
  const {
    symbol,
    state: { correctState, incorrectState },
  } = INITIAL_VALUE;

  let classNames = 'answer-section__symbol';
  if (clicked) {
    if (state === correctState) {
      classNames = `${classNames} answer-section__symbol_correct`;
    }
    if (state === incorrectState) {
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
