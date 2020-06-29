import React from 'react';
import Animate from '../../Utility/Animate/Animate';
import BodyContent from '../../Utility/BodyContent/BodyContent';
import ContentContainer from '../../Utility/ContentContainer/ContentContainer';
import AboutContent from './AboutContent/AboutContent';
import Resume from './Resume/Resume';
import AboutContact from './AboutContact/AboutContact';

const About = () => {
  return (
    <BodyContent>
      <Animate delayContent>
        <ContentContainer>
          <AboutContent />
          <Resume />
          <AboutContact />
        </ContentContainer>
      </Animate>
    </BodyContent>
  );
};

export default About;
