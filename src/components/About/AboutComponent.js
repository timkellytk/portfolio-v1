import React from 'react';
import BodyContent from '../Utility/BodyContent/BodyContent';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import Animate from '../Utility/Animate/Animate';
import ContactItem from './ContactItem/ContactItem';
import resume from '../../assets/pdfs/resume.pdf';
import style from './About.module.css';

const AboutComponent = () => {
  return (
    <BodyContent>
      <ContentContainer>
        <Animate delayTitle>
          <h1 className="margin">
            Hello, my name is Tim. I am a front-end web developer in Sydney,
            Australia
          </h1>
        </Animate>
      </ContentContainer>
      <Animate delayContent>
        <div className={[style.Photo, 'margin'].join(' ')} />
        <ContentContainer>
          <p>
            I create beautiful, responsive websites using HTML, CSS, JavaScript,
            React and Redux. I'm a highly energetic self-starter that built and
            sold a private tutoring business with $350k in revenue and $100k in
            profit. Now I'm studying front-end web development at{' '}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project{' '}
            </a>
            and looking for a career change as a junior web developer.
          </p>
          <p>
            I'm available for a full-time role as a junior front end developer
            in Sydney Australia. If you're hiring, please get in touch by any
            means of communication.
          </p>
          <p>
            <a className={style.Resume} href={resume}>
              View resume (PDF 70kb)
            </a>
          </p>
          <div className={style.ContactList}>
            <ContactItem link="mailto:timpkelly1@gmail.com">
              timpkelly1@gmail.com
            </ContactItem>
            <ContactItem link="https://github.com/timkellytk">
              GitHub
            </ContactItem>
            <ContactItem link="https://www.linkedin.com/in/tim-patrick-kelly/">
              LinkedIn
            </ContactItem>
            <ContactItem link="https://www.instagram.com/thetimman/">
              Instagram
            </ContactItem>
          </div>
        </ContentContainer>
      </Animate>
    </BodyContent>
  );
};

export default AboutComponent;
