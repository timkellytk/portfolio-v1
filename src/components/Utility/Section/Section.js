import React from 'react';
import style from './Section.module.css';

const Section = (props) => {
  const background =
    'linear-gradient(to bottom right,' +
    props.gradient1 +
    ', ' +
    props.gradient2 +
    ')';

  const gradient = {
    background: background,
  };

  console.log(background);
  return (
    <div className={style.Section} style={gradient}>
      <div className={style.Container}>{props.children}</div>
    </div>
  );
};

export default Section;
