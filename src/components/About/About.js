import React from 'react';
import Container from '../Utility/Container/Container';
import AboutContent from './AboutContent/AboutContent';
import Resume from './Resume/Resume';
import AboutContact from './AboutContact/AboutContact';

const About = () => {
  return (
    <Container delayContent>
      <AboutContent />
      <Resume />
      <AboutContact />
    </Container>
  );
};

export default About;
