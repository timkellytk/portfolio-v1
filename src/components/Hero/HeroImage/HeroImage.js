import React from 'react';
import * as style from './HeroImage.module.css';
import Animate from '../../Utility/Animate/Animate';

const HeroImage = () => {
  return (
    <Animate delayContent>
      <div className={style.Photo} />
    </Animate>
  );
};

export default HeroImage;
