import React from 'react';
import PortfolioPreview from '../../../../hoc/PortfolioPreview/PortfolioPreview';
import avatar from '../../../../assets/images/projects/evolutionary-tutors/darren-pehn.jpeg';
import logo from '../../../../assets/images/projects/evolutionary-tutors/evolutionary-logo.png';

const EvolutionaryTutorsPreview = () => {
  return (
    <PortfolioPreview
      name="Evolutionary Tutors"
      description="Private tutoring marketplace for primary school and high school
              students"
      quote="Seldom do you come across such a professional and competent young
              person like Tim… It is apparent that Tim spent considerable time
              and strategic effort in starting up and marketing Evolutionary
              Tutors"
      logo={logo}
      avatar={avatar}
      avatarName="Darren Pehn"
      avatarTitle="Co-Owner of Evolutionary Tutors"
      colour="#f0f2ff"
      link="/portfolio/evolutionary-tutors"
    />
  );
};

export default EvolutionaryTutorsPreview;
