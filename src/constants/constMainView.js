const INITIAL_STATE = {
  titleText: 'SONGBIRD',
  scoreText: 'SCORE : ',
  describeSectionText: 'Послушайте плеер и выберите птицу из списка',
  btnNextLevelText: 'Next Level',
  modalTitle: 'Поздравляем!',

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
};

export default INITIAL_STATE;
