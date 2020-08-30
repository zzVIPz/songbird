import React, { PureComponent } from 'react';
import CurrentQuestionSection from '../current-question-section/current-question-section';
import AnswerSection from '../answer-section/answer-section';
import DescribeSection from '../describe-section/describe-section';

export default class Main extends PureComponent {
  render() {
    const {
      SelectedBirdInfo,
      isCorrectAnswerGet,
      heroTitleText,
      currentRoundData,
      selectedBirdIndex,
      onAnswerClick,
      describeSectionText,
      currentItem,
    } = this.props;
    return (
      <main className="main">
        <CurrentQuestionSection {...{ ...SelectedBirdInfo, isCorrectAnswerGet, heroTitleText }} />
        <div className="container">
          <AnswerSection {...{ currentRoundData, selectedBirdIndex }} handleClick={onAnswerClick} />
          <DescribeSection {...{ currentRoundData, describeSectionText, currentItem }} />
        </div>
      </main>
    );
  }
}
