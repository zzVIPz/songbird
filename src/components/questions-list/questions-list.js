import React from 'react';
import ListItem from '../list-item/list-item';

import './questions-list.scss';

const QuestionList = ({ listItems }) => {
  const questionsList = listItems.map((item) => {
    const { id, ...props } = item;
    return (
      <li key={id} className="questions-list__item">
        <ListItem {...props} />
      </li>
    );
  });
  return <ul className="questions-list">{questionsList}</ul>;
};

export default QuestionList;
