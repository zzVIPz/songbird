import React from 'react';
import './list-item.scss';

const ListItem = ({ text, active }) => {
  return (
    <span className={`questions-list__text${active ? ' questions-list__text_active' : ''}`}>
      {text}
    </span>
  );
};
export default ListItem;
