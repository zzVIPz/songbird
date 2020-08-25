import React, { PureComponent } from 'react';
import './describe-section.scss';

export default class DescribeSection extends PureComponent {
  render() {
    const { describeSectionText } = this.props;
    return (
      <section>
        <p className="describe-section__text">{describeSectionText}</p>
      </section>
    );
  }
}
