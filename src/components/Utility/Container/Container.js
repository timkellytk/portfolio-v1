import React from 'react';
import style from './Container.module.css';
import Animate from '../Animate/Animate';

const Container = (props) => {
  let container = (
    <Animate delayContent>
      <div className={style.MaxWidth}>{props.children}</div>
    </Animate>
  );

  if (props.static) {
    container = <div className={style.MaxWidth}>{props.children}</div>;
  }

  return container;
};

export default Container;
