import React from 'react';

import { INITIAL_VALUE } from '../../constants/constants';
import CurrentQuestionSection from '../current-question-section/current-question-section';
import AnswerSection from '../answer-section/answer-section';
import DescribeSection from '../describe-section/describe-section';

const Main = ({
  SelectedBirdInfo,
  isCorrectAnswerGet,
  currentRoundData,
  selectedBirdIndex,
  onAnswerClick,
  currentItem,
}) => {
  const { describeSectionText, heroTitleText } = INITIAL_VALUE;

  return (
    <main className="main">
      <CurrentQuestionSection {...{ ...SelectedBirdInfo, isCorrectAnswerGet, heroTitleText }} />
      <div className="container">
        <AnswerSection
          {...{
            currentRoundData,
            selectedBirdIndex,
            handleClick: onAnswerClick,
            isCorrectAnswerGet,
          }}
        />
        <DescribeSection {...{ currentRoundData, describeSectionText, currentItem }} />
      </div>
    </main>
  );
};

export default Main;
