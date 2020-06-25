import React from 'react';
import Animate from '../Utility/Animate/Animate';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import AboutContent from './AboutContent/AboutContent';
import Resume from './Resume/Resume';
import AboutContact from './AboutContact/AboutContact';

const About = () => {
  return (
    <Animate delayContent>
      <ContentContainer>
        <AboutContent />
        <Resume />
        <AboutContact />
      </ContentContainer>
    </Animate>
  );
};

export default About;
