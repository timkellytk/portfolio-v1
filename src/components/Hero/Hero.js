import React from 'react';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import Animate from '../Utility/Animate/Animate';
import HeroImage from './HeroImage/HeroImage';

const Hero = () => {
  return (
    <React.Fragment>
      <ContentContainer>
        <Animate delayTitle>
          <h1>
            Hello, my name is Tim. I am a front-end web developer in Sydney,
            Australia
          </h1>
        </Animate>
      </ContentContainer>
      <Animate delayContent>
        <HeroImage />
      </Animate>
    </React.Fragment>
  );
};

export default Hero;
