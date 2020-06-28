import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/the-rambler-co/rambler-logo.png';
import avatar from '../../../../assets/images/projects/the-rambler-co/james-vodicka.jpg';

const TheRamblerCoPreview = () => {
  return (
    <PortfolioPreview
      name="The Rambler Co"
      description=" Sharing travel stories to inspire your next Australian adventure"
      quote="Thanks Tim, it's looking really great! So thrilled with how it's turned it - you've done an awesome job"
      logo={logo}
      avatar={avatar}
      avatarName="James Vodicka"
      avatarTitle="Founder of The Rambler Co"
      link="/portfolio/the-rambler-co"
      colour="#ddeee8"
    />
  );
};

export default TheRamblerCoPreview;
