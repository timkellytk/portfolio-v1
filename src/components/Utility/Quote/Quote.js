import React from 'react';
import PropTypes from 'prop-types';
import style from './Quote.module.css';

const Quote = (props) => {
  return (
    <div>
      <p className={style.Quote}>"{props.quote}"</p>
      <div className={style.QuoteBox}>
        <img
          src={props.avatar}
          className={style.QuoteAvatar}
          alt={props.avatarName}
        />
        <div className={style.AvatarText}>
          <div>{props.avatarName}</div>
          <div>{props.avatarTitle}</div>
        </div>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  avatarName: PropTypes.string.isRequired,
  avatarTitle: PropTypes.string.isRequired,
};

export default Quote;
