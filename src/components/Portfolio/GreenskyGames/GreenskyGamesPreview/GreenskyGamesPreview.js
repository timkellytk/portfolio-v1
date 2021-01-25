import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/greensky-games/greensky-logo.png';

const GreenskyGamesPreview = () => {
  return (
    <PortfolioPreview
      name="Greensky Games"
      description="Indie studio focused solely on VR, intense games using the latest technology"
      logo={logo}
      link="/portfolio/greensky-games"
      gradient1="#b7d9b8"
      gradient2="#4da13b"
    />
  );
};

export default GreenskyGamesPreview;
