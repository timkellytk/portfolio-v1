import React from 'react';

import Container from '../Utility/Container/Container';
import Logo from './Logo/Logo';
import Animate from '../Utility/Animate/Animate';
import HeroImage from './HeroImage/HeroImage';

const Hero = () => {
  return (
    <React.Fragment>
      <Container static>
        <Logo />
        <Animate delayTitle>
          <h1>
            Hello, my name is Tim. I am a front-end web developer in Sydney,
            Australia
          </h1>
        </Animate>
      </Container>
      <HeroImage />
    </React.Fragment>
  );
};

export default Hero;
