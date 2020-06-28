import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/utility/arrow-icon.svg';
import style from './LinkArrow.module.css';

const LinkArrow = (props) => {
  let link = (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={style.Button}
    >
      <div>
        <p className={style.ArrowText}>{props.children}</p>
        <img src={arrow} className={style.ArrowIcon} alt="arrow icon" />
      </div>
    </a>
  );

  if (props.internal) {
    link = (
      <Link to={props.link}>
        <div className={style.Button}>
          <p className={style.ArrowText}>{props.children}</p>
          <img src={arrow} className={style.ArrowIcon} alt="arrow icon" />
        </div>
      </Link>
    );
  }

  return link;
};

export default LinkArrow;
