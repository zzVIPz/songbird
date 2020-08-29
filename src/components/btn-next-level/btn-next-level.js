import React, { PureComponent } from 'react';
import './btn-next-level.scss';

export default class ButtonNextLevel extends PureComponent {
  render() {
    const { btnNextLevelText, isBtnNextLevelDisabled, handleClick } = this.props;

    let classNames = 'btn-next-level';
    if (!isBtnNextLevelDisabled) {
      classNames = `${classNames} btn-next-level_active`;
    }
    return (
      <button
        type="button"
        className={classNames}
        onClick={handleClick}
        disabled={isBtnNextLevelDisabled}
      >
        {btnNextLevelText}
      </button>
    );
  }
}
