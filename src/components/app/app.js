import React, { PureComponent } from 'react';
import INITIAL_STATE from '../../constants/constMainView';
import getRandomInteger from '../../utils/getRandomInteger';
import BIRDS_DATA from '../../data/birds-data';

import Header from '../header/header';
import ButtonNextLevel from '../btn-next-level/btn-next-level';
import CurrentQuestionSection from '../current-question-section/current-question-section';
import AnswerSection from '../answer-section/answer-section';
import DescribeSection from '../describe-section/describe-section';

export default class App extends PureComponent {
  state = {
    currentScore: INITIAL_STATE.initialScore,
    currentRound: 0,
    currentItem: null,
    addPoints: INITIAL_STATE.pointsForAnswer,
    selectedBirdIndex: getRandomInteger(),
    roundsList: INITIAL_STATE.roundsList,
    currentRoundData: BIRDS_DATA.warmUp,
    isBtnNextLevelDisabled: true,
    isCorrectAnswerGet: false,
  };

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
      const currentRoundsList = roundsList.map((item, idx) => {
        const el = { ...item, active: false };
        if (idx === currentRound + 1) {
          el.active = true;
        }
        return el;
      });
      return {
        roundsList: currentRoundsList,
        addPoints: INITIAL_STATE.pointsForAnswer,
        currentRound: currentRound + 1,
        isBtnNextLevelDisabled: true,
        currentRoundData: BIRDS_DATA[roundsList[currentRound + 1].id],
        selectedBirdIndex: getRandomInteger(),
        isCorrectAnswerGet: false,
        currentItem: null,
      };
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
    } = this.state;
    const {
      titleText,
      scoreText,
      btnNextLevelText,
      describeSectionText,
      heroTitleText,
    } = INITIAL_STATE;
    const currentRoundId = roundsList[currentRound].id;
    const SelectedRound = BIRDS_DATA[currentRoundId];
    const SelectedBirdInfo = SelectedRound[selectedBirdIndex];
    return (
      <div className="app__container">
        <Header {...{ titleText, scoreText, roundsList, currentScore }} />
        <main>
          <CurrentQuestionSection {...{ ...SelectedBirdInfo, isCorrectAnswerGet, heroTitleText }} />
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
      </div>
    );
  }
}
