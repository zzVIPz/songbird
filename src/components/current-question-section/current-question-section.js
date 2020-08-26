import React, { PureComponent } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import HeroTitle from '../hero-title/hero-title';
import QuestionImage from '../question-image/question-image';

import './current-question-section.scss';

export default class CurrentQuestionSection extends PureComponent {
  render() {
    const { audio, image, name, isCorrectAnswerGet, heroTitleText } = this.props;
    return (
      <section>
        {isCorrectAnswerGet ? <QuestionImage {...{ image }} /> : <QuestionImage />}

        <div>
          {isCorrectAnswerGet ? <HeroTitle {...{ name }} /> : <HeroTitle name={heroTitleText} />}
          <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
        </div>
      </section>
    );
  }
}
