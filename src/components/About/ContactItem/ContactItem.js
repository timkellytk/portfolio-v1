import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

const ContactItem = (props) => {
  return (
    <p className={style.ContactItem}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </p>
  );
};

ContactItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ContactItem;
