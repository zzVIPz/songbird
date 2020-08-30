import React, { PureComponent } from 'react';

import AudioPlayer from 'react-h5-audio-player';

import HeroTitle from '../hero-title/hero-title';
import QuestionImage from '../question-image/question-image';

import './current-question-section.scss';
// import '../../sass/components/_audio-player.scss';

export default class CurrentQuestionSection extends PureComponent {
  render() {
    const { audio, image, name, isBtnNextLevelDisabled, heroTitleText } = this.props;
    return (
      <section className="current-question-section">
        {isBtnNextLevelDisabled ? <QuestionImage /> : <QuestionImage {...{ image }} />}
        <div className="current-question-section__info">
          {isBtnNextLevelDisabled ? (
            <HeroTitle name={heroTitleText} />
          ) : (
            <HeroTitle {...{ name }} />
          )}
          <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
        </div>
      </section>
    );
  }
}
