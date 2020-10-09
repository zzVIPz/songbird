import React from 'react';

import AudioPlayer from 'react-h5-audio-player';

import HeroTitle from '../hero-title/hero-title';
import QuestionImage from '../question-image/question-image';

import './current-question-section.scss';

const CurrentQuestionSection = ({ audio, image, name, isBtnNextLevelDisabled, heroTitleText }) => {
  return (
    <section className="current-question-section">
      {isBtnNextLevelDisabled ? <QuestionImage /> : <QuestionImage {...{ image }} />}
      <div className="current-question-section__info">
        {isBtnNextLevelDisabled ? <HeroTitle name={heroTitleText} /> : <HeroTitle {...{ name }} />}
        <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
      </div>
    </section>
  );
};

export default CurrentQuestionSection;
