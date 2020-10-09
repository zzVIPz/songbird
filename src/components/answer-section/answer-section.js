import React, { useState } from 'react';
import { INITIAL_VALUE } from '../../constants/constants';
import AnswerItem from '../answer-item/answer-item';
import './answer-section.scss';

const AnswerSection = ({
  currentRoundData,
  selectedBirdIndex,
  handleClick,
  isBtnNextLevelDisabled,
}) => {
  const { defaultState, correctState, incorrectState } = INITIAL_VALUE.state;
  const [itemsState, setItemsState] = useState(currentRoundData.map(() => defaultState));

  const changeItemDefaultState = (id) => {
    if (isBtnNextLevelDisabled) {
      const copy = [...itemsState];
      if (id === selectedBirdIndex) {
        copy[id] = correctState;
        setItemsState(copy);
      } else {
        copy[id] = incorrectState;
        setItemsState(copy);
      }
    }
  };

  const answersList = currentRoundData.map((item) => {
    const { id, name, clicked } = item;
    return (
      <li
        key={id}
        className="answer-section__item"
        onClick={() => {
          handleClick(id, clicked);
          changeItemDefaultState(id - 1);
        }}
        aria-hidden="true"
      >
        <AnswerItem
          {...{
            name,
            clicked,
            state: itemsState[id - 1],
          }}
        />
      </li>
    );
  });
  return (
    <section className="answer-section">
      <ul className="answer-section__list">{answersList}</ul>
    </section>
  );
};

export default AnswerSection;
