import React from 'react';
import style from './ContentContainer.module.css';

const ContentContainer = (props) => {
  let container = <div className={style.ContentContainer}>{props.children}</div>

  if (props.section) {
    container = <div className={style.SectionContainer}>{props.children}</div>
  }

  return container;
};

export default ContentContainer;
