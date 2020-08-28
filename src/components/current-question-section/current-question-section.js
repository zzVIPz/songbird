import React, { PureComponent } from 'react';

import AudioPlayer from 'react-h5-audio-player';

import HeroTitle from '../hero-title/hero-title';
import QuestionImage from '../question-image/question-image';

import './current-question-section.scss';
// import '../../sass/components/_audio-player.scss';

export default class CurrentQuestionSection extends PureComponent {
  render() {
    const { audio, image, name, isCorrectAnswerGet, heroTitleText } = this.props;
    return (
      <section className="current-question-section">
        {isCorrectAnswerGet ? <QuestionImage {...{ image }} /> : <QuestionImage />}
        <div className="current-question-section__info">
          {isCorrectAnswerGet ? <HeroTitle {...{ name }} /> : <HeroTitle name={heroTitleText} />}
          <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
        </div>
      </section>
    );
  }
}
