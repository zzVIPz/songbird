import React, { PureComponent } from 'react';
import './answer-item.scss';

export default class AnswerItem extends PureComponent {
  render() {
    const { name, id, clicked, selectedBirdIndex } = this.props;
    let classNames = 'answer-section__text';
    if (clicked) {
      if (id - 1 === selectedBirdIndex) {
        classNames = `${classNames} answer-section__text_correct`;
      } else {
        classNames = `${classNames} answer-section__text_incorrect`;
      }
    }

    return <span className={classNames}>{name}</span>;
  }
}
