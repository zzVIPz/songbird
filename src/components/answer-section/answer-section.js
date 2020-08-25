import React, { PureComponent } from 'react';
import AnswerItem from '../answer-item/answer-item';
import './answer-section.scss';

export default class AnswerSection extends PureComponent {
  render() {
    const { currentRoundData, selectedBirdIndex, handleClick } = this.props;
    const answersList = currentRoundData.map((item) => {
      const { id, name, clicked } = item;
      return (
        <li
          key={id}
          className="answer-section__item"
          onClick={() => {
            console.log('clicked', clicked);
            if (!clicked) {
              handleClick(id);
            }
          }}
          aria-hidden="true"
        >
          <AnswerItem {...{ name, id, clicked, selectedBirdIndex }} />
        </li>
      );
    });
    return (
      <section>
        <ul className="answer-section__list">{answersList}</ul>
      </section>
    );
  }
}
