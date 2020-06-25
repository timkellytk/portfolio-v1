import React from 'react';
import style from './ContentContainer.module.css';

const Content = (props) => {
  return <div className={style.MaxWidth}>{props.children}</div>;
};

export default Content;
