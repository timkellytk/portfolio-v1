import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/the-rambler-co/rambler-logo.png';
import avatar from '../../../../assets/images/projects/the-rambler-co/james-vodicka.jpg';

const TheRamblerCoPreview = () => {
  return (
    <PortfolioPreview
      name="The Rambler Co"
      description="Sharing travel stories to inspire your next Australian adventure"
      logo={logo}
      link="/portfolio/the-rambler-co"
      gradient1="#e8dfca"
      gradient2="#f7c7a4"
    />
  );
};

export default TheRamblerCoPreview;
