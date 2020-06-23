import React from 'react';
import style from './ContactItem.module.css';

const ContactItem = (props) => {
  let contact = <div className={style.ContactItem}>{props.children}</div>;

  if (props.link) {
    contact = (
      <div className={style.ContactItem}>
        <a href={props.link} target="blank">
          {props.children}
        </a>
      </div>
    );
  }

  return contact;
};

export default ContactItem;
