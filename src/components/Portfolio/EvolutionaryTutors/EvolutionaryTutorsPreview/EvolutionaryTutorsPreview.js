import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import logo from '../../../../assets/images/projects/evolutionary-tutors/evolutionary-logo.png';

const EvolutionaryTutorsPreview = () => {
  return (
    <PortfolioPreview
      name="Evolutionary Tutors"
      description="Private tutoring marketplace for primary school and high school
              students"
      logo={logo}
      link="/portfolio/evolutionary-tutors"
      gradient1="#d3d3f9"
      gradient2="#c8f4fc"
    />
  );
};

export default EvolutionaryTutorsPreview;
