import React from 'react';
import './Animate.css';

const Animate = (props) => {
  let animate = <div className="animate">{props.children}</div>;

  if (props.delayContent) {
    animate = <div className="animate delaycontent">{props.children}</div>;
  }

  if (props.delayTitle) {
    animate = <div className="animate delaytitle">{props.children}</div>;
  }

  return animate;
};

export default Animate;
