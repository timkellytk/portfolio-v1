import React from 'react';
import style from './AboutContact.module.css';
import ContactItem from './ContactItem/ContactItem';

const AboutContact = () => {
  return (
    <div className={style.ContactList}>
      <ContactItem>timpkelly1@gmail.com</ContactItem>
      <ContactItem link="https://github.com/timkellytk">GitHub</ContactItem>
      <ContactItem link="https://www.linkedin.com/in/tim-patrick-kelly/">
        LinkedIn
      </ContactItem>
      <ContactItem link="https://www.instagram.com/thetimman/">
        Instagram
      </ContactItem>
    </div>
  );
};

export default AboutContact;
