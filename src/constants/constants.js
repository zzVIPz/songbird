import BIRDS_DATA from '../data/birds-data';
import getRandomInteger from '../utils/getRandomInteger';

const INITIAL_VALUE = {
  titleText: 'SONGBIRD',
  scoreText: 'SCORE : ',
  describeSectionText: 'Послушайте плеер и выберите птицу из списка',
  btnNextLevelText: 'Next Level',
  modalTitle: 'Поздравляем!',
  heroTitleText: '*******',
  btnRepeat: 'Попробовать снова',
  roundsList: [
    { id: 'warmUp', text: 'РАЗМИНКА', active: true },
    { id: 'sparrow', text: 'ВОРОБЬИНЫЕ', active: false },
    { id: 'forestBirds', text: 'ЛЕСНЫЕ ПТИЦЫ', active: false },
    { id: 'singleBirds', text: 'ПЕВЧИЕ ПТИЦЫ', active: false },
    { id: 'predatorBirds', text: 'ХИЧНЫЕ ПТИЦЫ', active: false },
    { id: 'seaBirds', text: 'МОРСКИЕ ПТИЦЫ', active: false },
  ],
  pointsForAnswer: 5,
  initialScore: 0,
  maxGamePoints: 30,
};

const INITIAL_STATE = {
  currentScore: INITIAL_VALUE.initialScore,
  currentRound: 0,
  currentItem: null,
  addPoints: INITIAL_VALUE.pointsForAnswer,
  selectedBirdIndex: getRandomInteger(),
  roundsList: INITIAL_VALUE.roundsList,
  currentRoundData: BIRDS_DATA.warmUp,
  isBtnNextLevelDisabled: true,
  isCorrectAnswerGet: false,
  showModal: false,
};

const MODAL_CONGRATULATION = (point) =>
  `Вы набрали ${point} из ${INITIAL_VALUE.maxGamePoints} возможных баллов`;

export { INITIAL_VALUE, MODAL_CONGRATULATION, INITIAL_STATE };
