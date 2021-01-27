import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogEvolutionary from '../../../../assets/images/openGraph/ogEvolutionary.png';
import logo from '../../../../assets/images/projects/swarm/swarm-logo.png';
import home from '../../../../assets/images/projects/swarm/screenshots/home.png';
import play from '../../../../assets/images/projects/swarm/screenshots/play.png';
import testimonials from '../../../../assets/images/projects/swarm/screenshots/testimonials.png';
import cta from '../../../../assets/images/projects/swarm/screenshots/cta.png';
import presskit from '../../../../assets/images/projects/swarm/screenshots/press-kit.png';
import contact from '../../../../assets/images/projects/swarm/screenshots/contact.png';

const EvolutionaryTutorsProject = () => {
  let SEO = (
    <HelmetHOC
      title="Evolutionary Tutors Case Study | timkelly.dev"
      description="The story behind a bespoke website that find students the best tutors, give tutors
              effective training and save administrators time."
      image={ogEvolutionary}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <PortfolioProject
        name="Evolutionary Tutors"
        logo={logo}
        url="https://swarm-vr-game.webflow.io/"
        projectTitle="Website Build"
        projectDescription="A website for an intense fast-paced arcade grapple shooter built in VR."
        gradient1="#24dae0"
        gradient2="#bc76e7"
        images={[
          home,
          play,
          testimonials,
          cta,
          presskit,
          contact
        ]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'Swarm is an intense VR game built to capture the excitement of the next generation of gamers. The game is set to be released in 2021 and the website is an important platform to create hyper for players and press.',
          }
        ]}
      />
    </React.Fragment>
  );
};

export default EvolutionaryTutorsProject;
