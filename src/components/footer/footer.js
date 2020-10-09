import React from 'react';

import { INITIAL_VALUE } from '../../constants/constants';

import './footer.scss';

const Footer = ({ isBtnNextLevelDisabled = true, handleClick }) => {
  const { btnNextLevelText } = INITIAL_VALUE;
  let classNames = 'btn-next-level';
  if (!isBtnNextLevelDisabled) {
    classNames = `${classNames} btn-next-level_active`;
  }
  return (
    <footer className="footer">
      <button
        type="button"
        className={classNames}
        onClick={handleClick}
        disabled={isBtnNextLevelDisabled}
      >
        {btnNextLevelText}
      </button>
    </footer>
  );
};

export default Footer;
