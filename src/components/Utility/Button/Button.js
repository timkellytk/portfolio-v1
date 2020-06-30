import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
  return (
    <a
      href={props.link}
      className={style.Button}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default Button;
