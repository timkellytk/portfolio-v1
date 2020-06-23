import React from 'react';
import './Animate.css';

const Animate = (props) => {
  let animate = <div className="Animate">{props.children}</div>;

  if (props.delayContent) {
    animate = <div className="Animate DelayContent">{props.children}</div>;
  }

  if (props.delayTitle) {
    animate = <div className="Animate DelayTitle">{props.children}</div>;
  }

  return animate;
};

export default Animate;
