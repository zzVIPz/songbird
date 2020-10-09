import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import QuestionImage from '../question-image/question-image';

import 'react-h5-audio-player/lib/styles.css';
import './describe-section.scss';

const DescribeSection = ({ describeSectionText, currentItem, currentRoundData }) => {
  if (currentItem) {
    const { image, name, species, description, audio } = currentRoundData[currentItem - 1];
    return (
      <section className="describe-section">
        <div className="wrapper">
          <div className="describe-section__description">
            <h3> {name} </h3>
            <h5> {species} </h5>
            <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
          </div>
          <QuestionImage {...{ image }} />
        </div>
        <p className="describe-section__text">{description}</p>
      </section>
    );
  }
  return <p className="describe-text">{describeSectionText}</p>;
};

export default DescribeSection;
