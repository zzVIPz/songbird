import React, { PureComponent } from 'react';
import './footer.scss';

export default class Footer extends PureComponent {
  render() {
    const { btnNextLevelText, isBtnNextLevelDisabled, handleClick } = this.props;

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
  }
}
