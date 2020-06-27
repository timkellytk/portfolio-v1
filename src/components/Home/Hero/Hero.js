import React from 'react';
import ContentContainer from '../../Utility/ContentContainer/ContentContainer';
import Animate from '../../Utility/Animate/Animate';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <React.Fragment>
      <ContentContainer>
        <Animate delayTitle>
          <h1 className={style.TitleMargin}>
            Hello, my name is Tim. I am a front-end web developer in Sydney,
            Australia
          </h1>
        </Animate>
      </ContentContainer>
      <Animate delayContent>
        <div className={style.Photo} />
      </Animate>
    </React.Fragment>
  );
};

export default Hero;
