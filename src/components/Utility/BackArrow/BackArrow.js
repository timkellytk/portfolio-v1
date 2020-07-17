import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/images/utility/back-arrow.svg';
import style from './BackArrow.module.css';

const BackArrow = (props) => {
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
          <img src={arrow} className={style.ArrowIcon} alt="arrow icon" />
          <p className={style.ArrowText}>{props.children}</p>
        </div>
      </Link>
    );
  }

  return link;
};

BackArrow.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BackArrow;
