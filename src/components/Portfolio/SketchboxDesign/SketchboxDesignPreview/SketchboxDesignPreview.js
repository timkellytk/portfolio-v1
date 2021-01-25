import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/sketchbox-design/sketchbox-design-logo.png';

const SketchboxDesignPreview = () => {
  return (
    <PortfolioPreview
      name="Sketchbox Design"
      description="The #1 design and collaboration tool for augmented reality and virtual reality"
      logo={logo}
      link="/portfolio/sketchbox-design"
      gradient1="#d1d0e8"
      gradient2="#ab9ad3"
    />
  );
};

export default SketchboxDesignPreview;
