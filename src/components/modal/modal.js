import React from 'react';
import { INITIAL_VALUE, MODAL_CONGRATULATION } from '../../constants/constants';
import likeSVG from '../../assets/svg/like.svg';
import congratulationSVG from '../../assets/svg/congratulation.svg';

const Modal = ({ currentScore }) => {
  const { maxGamePoints, modalTitle } = INITIAL_VALUE;
  let image = likeSVG;
  if (maxGamePoints === currentScore) {
    image = congratulationSVG;
  }

  return (
    <div>
      <h3> {modalTitle} </h3>
      <h5> {MODAL_CONGRATULATION(currentScore)} </h5>
      <img className="modal__image" src={image} alt="" />
    </div>
  );
};
export default Modal;
