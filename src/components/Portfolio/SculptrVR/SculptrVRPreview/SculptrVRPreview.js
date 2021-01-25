import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/sculptrvr/sculptrvr-logo.png';

const SculptrVRPreview = () => {
  return (
    <PortfolioPreview
      name="SculptrVR"
      description="Create brilliant new worlds in virtual reality and explore them with friends"
      logo={logo}
      link="/portfolio/sculptrvr"
      gradient1="#d1ecff"
      gradient2="#98caec"
    />
  );
};

export default SculptrVRPreview;
