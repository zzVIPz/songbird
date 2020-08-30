import React from 'react';
import AnswerItem from '../answer-item/answer-item';
import './answer-section.scss';

const AnswerSection = ({
  currentRoundData,
  selectedBirdIndex,
  handleClick,
  isCorrectAnswerGet,
}) => {
  const answersList = currentRoundData.map((item) => {
    const { id, name, clicked } = item;
    return (
      <li
        key={id}
        className="answer-section__item"
        onClick={() => {
          if (!clicked) {
            handleClick(id);
          }
        }}
        aria-hidden="true"
      >
        <AnswerItem {...{ name, id, clicked, selectedBirdIndex, isCorrectAnswerGet }} />
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
