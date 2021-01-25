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
            I'm a front-end web developer with an eye for design and 3-years
            experience working for small businesses and large enterprises.
          </p>
          <p>
            In 2017, I cofounded a private tutoring business and launched it
            into the world with my first WordPress website. For the next two and
            half years, I hustled to build the company from $0 to $350k in
            revenue, teaching myself HTML, CSS and JavaScript in the process.
          </p>
          <p>
            In 2020, I went full-time studying how to build modern web
            applications with JavaScript, React, Redux and Firebase. Outside of
            study, I made websites for Sketchbox, The Rambler Co, Swarm,
            SculptrVR and Greensky Games.
          </p>
          <p>
            Now, I'm a full-time developer intern at Southern Cross Austereo
            building an audio platform with NextJS, Redux, Cloud Functions and a
            Headless CMS.
          </p>
          <p>
            <a className={style.Resume} href={resume}>
              View resume
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
          </div>
        </ContentContainer>
      </Animate>
    </BodyContent>
  );
};

export default AboutComponent;
