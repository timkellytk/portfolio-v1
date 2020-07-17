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
            I create beautiful, responsive websites using HTML, CSS, JavaScript
            and React. After completing a Bachelor's Marketing and Media at
            Macquarie University, I spent 3-years learning how to code, built
            and sold,{' '}
            <a
              href="https://www.evolutionarytutors.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Evolutionary Tutors
            </a>{' '}
            and worked as an SEO executive in London.
          </p>
          <p>
            Currently, I'm completing the{' '}
            <a
              href="https://www.theodinproject.com/tracks/full-stack-javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stack JavaScript Bootcamp
            </a>{' '}
            at The Odin Project and working as a freelance developer for{' '}
            <a
              href="https://www.therambler.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Rambler Co
            </a>
            .
          </p>
          <p>
            Now I'm available for a full-time role as a junior web developer in
            Sydney Australia. If you're hiring, please get in touch by any means
            of communication.
          </p>
          <p>
            <a className={style.Resume} href={resume}>
              View resume (PDF 42kb)
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
