import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/the-rambler-co/rambler-logo.png';
import avatar from '../../../../assets/images/projects/the-rambler-co/james-vodicka.jpg';

const TheRamblerCoPreview = () => {
  return (
    <PortfolioPreview
      name="The Rambler Co"
      description=" Sharing travel stories to inspire your next Australian adventure"
      quote="Highly impressed with Tim's knowledge, work ethic and professionalism in helping us bring our ideas to life... Tim has gone above and beyond in solving the problems presented to him"
      logo={logo}
      avatar={avatar}
      avatarName="James Vodicka"
      avatarTitle="Founder of The Rambler Co"
      link="/portfolio/the-rambler-co"
      gradient1="#e8dfca"
      gradient2="#f7c7a4"
    />
  );
};

export default TheRamblerCoPreview;
