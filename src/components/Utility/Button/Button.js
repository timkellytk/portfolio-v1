import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
