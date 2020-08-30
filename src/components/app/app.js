import React, { PureComponent } from 'react';
import { INITIAL_VALUE, INITIAL_STATE } from '../../constants/constants';
import getRandomInteger from '../../utils/getRandomInteger';
import BIRDS_DATA from '../../data/birds-data';

import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

import correctAudioSound from '../../assets/audio/correct.mp3';
import incorrectAudioSound from '../../assets/audio/error.mp3';

export default class App extends PureComponent {
  state = INITIAL_STATE;

  correctAnswerAudio = new Audio(correctAudioSound);

  incorrectAnswerAudio = new Audio(incorrectAudioSound);

  onAnswerClick = (id) => {
    const { selectedBirdIndex, addPoints } = this.state;
    this.changeAnswerItemClass(id);
    if (selectedBirdIndex === id - 1) {
      this.correctAnswerAudio.play();
      this.setState(({ currentScore }) => ({
        currentScore: currentScore + addPoints,
        isBtnNextLevelDisabled: false,
        isCorrectAnswerGet: true,
        currentItem: id,
      }));
    } else if (addPoints) {
      this.incorrectAnswerAudio.play();
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

    const currentRoundId = roundsList[currentRound].id;
    const SelectedRound = BIRDS_DATA[currentRoundId];
    const SelectedBirdInfo = SelectedRound[selectedBirdIndex];

    if (!showModal) {
      return (
        <>
          <Header {...{ roundsList, currentScore }} />
          <Main
            {...{
              SelectedBirdInfo,
              isCorrectAnswerGet,
              isBtnNextLevelDisabled,
              currentRoundData,
              selectedBirdIndex,
              onAnswerClick: this.onAnswerClick,
              currentItem,
            }}
          />
          <Footer
            {...{
              isBtnNextLevelDisabled,
              handleClick: this.onButtonNextLevelClick,
            }}
          />
        </>
      );
    }

    return <Modal {...{ currentScore, handleClick: this.onGameRestart }} />;
  }
}
