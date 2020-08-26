import React from 'react';
import { INITIAL_VALUE, MODAL_CONGRATULATION } from '../../constants/constants';
import likeSVG from '../../assets/svg/like.svg';
import congratulationSVG from '../../assets/svg/congratulation.svg';

const Modal = ({ currentScore, handleClick }) => {
  const { maxGamePoints, modalTitle, btnRepeat } = INITIAL_VALUE;

  let image = likeSVG;
  let btnRepeatClass = 'modal__button';
  if (maxGamePoints === currentScore) {
    image = congratulationSVG;
    btnRepeatClass = `${btnRepeatClass} ${btnRepeatClass}-disabled`;
  }

  return (
    <div className="modal">
      <h3 className="modal__title"> {modalTitle} </h3>
      <h5 className="modal__subtitle"> {MODAL_CONGRATULATION(currentScore)} </h5>
      <img className="modal__image" src={image} alt="" />
      <button className={btnRepeatClass} type="button" onClick={handleClick}>
        {btnRepeat}
      </button>
    </div>
  );
};

export default Modal;
