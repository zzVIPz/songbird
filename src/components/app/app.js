import React, { PureComponent } from 'react';
import { INITIAL_VALUE, INITIAL_STATE } from '../../constants/constants';
import getRandomInteger from '../../utils/getRandomInteger';
import BIRDS_DATA from '../../data/birds-data';

import Header from '../header/header';
import ButtonNextLevel from '../btn-next-level/btn-next-level';
import CurrentQuestionSection from '../current-question-section/current-question-section';
import AnswerSection from '../answer-section/answer-section';
import DescribeSection from '../describe-section/describe-section';
import Modal from '../modal/modal';

export default class App extends PureComponent {
  state = INITIAL_STATE;

  onAnswerClick = (id) => {
    const { selectedBirdIndex, addPoints } = this.state;
    this.changeAnswerItemClass(id);
    if (selectedBirdIndex === id - 1) {
      this.setState(({ currentScore }) => ({
        currentScore: currentScore + addPoints,
        isBtnNextLevelDisabled: false,
        isCorrectAnswerGet: true,
        currentItem: id,
      }));
    } else if (addPoints) {
      this.setState(() => ({
        addPoints: addPoints - 1,
        currentItem: id,
      }));
    }
  };

  onGameRestart = () => {
    this.setState(() => INITIAL_STATE);
  };

  changeAnswerItemClass = (id) => {
    this.setState(({ currentRoundData }) => {
      const idx = currentRoundData.findIndex((el) => el.id === id);
      const item = currentRoundData[idx];
      const newItem = { ...item, clicked: true };
      const updatedRoundData = [
        ...currentRoundData.slice(0, idx),
        newItem,
        ...currentRoundData.slice(idx + 1),
      ];
      return {
        currentRoundData: updatedRoundData,
      };
    });
  };

  onButtonNextLevelClick = () => {
    this.setState(({ roundsList, currentRound }) => {
      if (currentRound < roundsList.length - 1) {
        const currentRoundsList = roundsList.map((item, idx) => {
          const el = { ...item, active: false };
          if (idx === currentRound + 1) {
            el.active = true;
          }
          return el;
        });
        return {
          roundsList: currentRoundsList,
          addPoints: INITIAL_VALUE.pointsForAnswer,
          currentRound: currentRound + 1,
          isBtnNextLevelDisabled: true,
          currentRoundData: BIRDS_DATA[roundsList[currentRound + 1].id],
          selectedBirdIndex: getRandomInteger(),
          isCorrectAnswerGet: false,
          currentItem: null,
        };
      }
      return { showModal: true };
    });
  };

  render() {
    const {
      currentScore,
      roundsList,
      selectedBirdIndex,
      currentRound,
      currentRoundData,
      isBtnNextLevelDisabled,
      isCorrectAnswerGet,
      currentItem,
      showModal,
    } = this.state;
    const {
      titleText,
      scoreText,
      btnNextLevelText,
      describeSectionText,
      heroTitleText,
    } = INITIAL_VALUE;
    const currentRoundId = roundsList[currentRound].id;
    const SelectedRound = BIRDS_DATA[currentRoundId];
    const SelectedBirdInfo = SelectedRound[selectedBirdIndex];

    if (!showModal) {
      return (
        <>
          <Header {...{ titleText, scoreText, roundsList, currentScore }} />
          <main>
            <CurrentQuestionSection
              {...{ ...SelectedBirdInfo, isCorrectAnswerGet, heroTitleText }}
            />
            <div className="wrapper">
              <AnswerSection
                {...{ currentRoundData, selectedBirdIndex }}
                handleClick={this.onAnswerClick}
              />
              <DescribeSection {...{ currentRoundData, describeSectionText, currentItem }} />
            </div>
          </main>
          <footer>
            <ButtonNextLevel
              {...{ btnNextLevelText, isBtnNextLevelDisabled }}
              handleClick={this.onButtonNextLevelClick}
            />
          </footer>
        </>
      );
    }

    return <Modal {...{ currentScore }} handleClick={this.onGameRestart} />;
  }
}
