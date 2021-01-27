import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogEvolutionary from '../../../../assets/images/openGraph/ogEvolutionary.png';
import different from '../../../../assets/images/projects/sculptrvr/screenshots/different-sculptrvr.png';
import home from '../../../../assets/images/projects/sculptrvr/screenshots/home-sculptrvr.png';
import love from '../../../../assets/images/projects/sculptrvr/screenshots/loves-sculptrvr.png';
import play from '../../../../assets/images/projects/sculptrvr/screenshots/play-sculptrvr.png';
import video from '../../../../assets/images/projects/sculptrvr/screenshots/video-sculptrvr.png';

const SculptrVR = () => {
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
        url="https://www.sculptrvr.com/"
        projectTitle="Website Build"
        projectDescription="A bespoke website to get players excited to download and play a 3d virtual reality sculpting game."
        gradient1="#d1ecff"
        gradient2="#98caec"
        images={[home, love, play, different, video]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'SculptrVR was rebranded to be more approachable and exciting to the next generation of virtual reality gamers. The wesbite needed to make it exciting to create sculptures with your friends in VR, get people to join the SculptrVR community and learn more about how to play the game in the documentation.',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default SculptrVR;
