import React from 'react';
import style from './BodyContent.module.css';

const BodyContent = (props) => {
  return <div className={style.BodyContent}>{props.children}</div>;
};

export default BodyContent;
