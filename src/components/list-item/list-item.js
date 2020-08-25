import React from 'react';
import './list-item.scss';

const ListItem = ({ text, active }) => {
  let classNames = 'questions-list__text';
  if (active) {
    classNames = `${classNames} questions-list__text_active`;
  }
  return <span className={classNames}>{text}</span>;
};
export default ListItem;
