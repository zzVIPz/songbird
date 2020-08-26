import React, { PureComponent } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import QuestionImage from '../question-image/question-image';

import 'react-h5-audio-player/lib/styles.css';
import './describe-section.scss';

export default class DescribeSection extends PureComponent {
  render() {
    console.log('DescribeSection', this.props);
    const { describeSectionText, currentItem, currentRoundData } = this.props;

    if (currentItem) {
      const { image, name, species, description, audio } = currentRoundData[currentItem - 1];
      return (
        <section>
          <QuestionImage {...{ image }} />
          <h3> {name} </h3>
          <h5> {species} </h5>
          <AudioPlayer src={audio} autoPlay={false} autoPlayAfterSrcChange={false} />
          <p>{description}</p>
        </section>
      );
    }

    return <p className="describe-section__text">{describeSectionText}</p>;
  }
}
