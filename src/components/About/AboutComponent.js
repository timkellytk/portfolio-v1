import React from "react";
import BodyContent from "../Utility/BodyContent/BodyContent";
import ContentContainer from "../Utility/ContentContainer/ContentContainer";
import Animate from "../Utility/Animate/Animate";
import ContactItem from "./ContactItem/ContactItem";
import resume from "../../assets/pdfs/resume.pdf";
import style from "./About.module.css";

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
        <div className={[style.Photo, "margin"].join(" ")} />
        <ContentContainer>
          <p>
            I'm a front-end web developer with a Bachelor of Marketing and Media
            from Macquarie University (GPA 3.9/4) and more than three years of
            experience working for small businesses and large enterprises.
          </p>
          <p>
            In 2017, I co-founded a private tutoring business and created my
            first WordPress website. For the next two and half years, I hustled
            to build the company from $0 to $350k in revenue and learned HTML,
            CSS and JavaScript in the process.
          </p>
          <p>
            In 2020, I studied full-time how to build modern web applications
            with JavaScript, React, Redux and Firebase. I developed websites for
            startups in education, travel, VR gaming and VR software. My
            freelance clients include{" "}
            <a href="/portfolio/sketchbox-design">Sketchbox</a>,{" "}
            <a href="/portfolio/the-rambler-co">The Rambler Co</a>,{" "}
            <a href="/portfolio/swarm">Swarm</a>,{" "}
            <a href="/portfolio/sculptrvr">SculptrVR</a> and{" "}
            <a href="/portfolio/greensky-games">
              Greensky Games
            </a>
            .
          </p>
          <p>
            In my most recent role as a Developer Intern at Southern Cross
            Austereo, I worked quickly and independently to resolve Jira support
            tickets across React, Redux, Firebase Cloud Function and GraphQL,
            which helped the team beat the project deadline by 2-weeks.
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
