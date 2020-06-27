import React from 'react';
import arrow from '../../../assets/images/utility/arrow-icon.svg';
import style from './LinkArrow.module.css';

const LinkArrow = (props) => {
  return (
    <a href={props.link} className={style.Button}>
      <div>
        <p className={style.ArrowText}>{props.children}</p>
        <img src={arrow} className={style.ArrowIcon} alt="arrow icon" />
      </div>
    </a>
  );
};

export default LinkArrow;
