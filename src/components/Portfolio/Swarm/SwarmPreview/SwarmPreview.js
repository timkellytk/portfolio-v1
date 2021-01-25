import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/swarm/swarm-logo.png';

const SwarmPreview = () => {
  return (
    <PortfolioPreview
      name="Swarm"
      description="Epic arcade shooter built for VR, fast-paced, quick-sessions and bright colourful worlds"
      logo={logo}
      link="/portfolio/swarm"
      gradient1="#24dae0"
      gradient2="#bc76e7"
    />
  );
};

export default SwarmPreview;
