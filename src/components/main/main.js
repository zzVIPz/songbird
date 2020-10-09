import React from 'react';

import { INITIAL_VALUE } from '../../constants/constants';
import CurrentQuestionSection from '../current-question-section/current-question-section';
import AnswerSection from '../answer-section/answer-section';
import DescribeSection from '../describe-section/describe-section';
import Modal from '../modal/modal';

const Main = ({
  SelectedBirdInfo,
  isBtnNextLevelDisabled,
  currentRoundData,
  selectedBirdIndex,
  currentItem,
  showModal,
  currentScore,
  handleClick,
}) => {
  const { describeSectionText, heroTitleText } = INITIAL_VALUE;

  if (currentRoundData && isBtnNextLevelDisabled) {
    // eslint-disable-next-line no-console
    console.log('Correct answer is', currentRoundData[selectedBirdIndex].name);
  }

  return (
    <main className="main">
      {showModal ? (
        <Modal {...{ currentScore, handleClick }} />
      ) : (
        <>
          <CurrentQuestionSection
            {...{ ...SelectedBirdInfo, isBtnNextLevelDisabled, heroTitleText }}
          />
          <div className="container">
            <AnswerSection
              {...{
                currentRoundData,
                selectedBirdIndex,
                handleClick,
                isBtnNextLevelDisabled,
              }}
            />
            <DescribeSection {...{ currentRoundData, describeSectionText, currentItem }} />
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
