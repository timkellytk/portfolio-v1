import React from 'react';
import BodyContent from '../../Utility/BodyContent/BodyContent';
import ContentContainer from '../../Utility/ContentContainer/ContentContainer';
import Animate from '../../Utility/Animate/Animate';
import style from './Hero.module.css';

const Hero = () => {
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
      </Animate>
    </BodyContent>
  );
};

export default Hero;
