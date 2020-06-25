import React from 'react';
import style from './Section.module.css';

const Section = (props) => {
  const colour = {
    backgroundColor: props.colour,
  };

  return (
    <div className={style.Section} style={colour}>
      <div className={style.Container}>{props.children}</div>
    </div>
  );
};

export default Section;
