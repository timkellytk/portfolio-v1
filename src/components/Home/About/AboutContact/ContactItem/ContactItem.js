import React from 'react';
import style from './ContactItem.module.css';

const ContactItem = (props) => {
  let contact = <p className={style.ContactItem}>{props.children}</p>;

  if (props.link) {
    contact = (
      <p className={style.ContactItem}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      </p>
    );
  }

  return contact;
};

export default ContactItem;
