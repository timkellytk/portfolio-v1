import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogEvolutionary from '../../../../assets/images/openGraph/ogEvolutionary.png';
import logo from '../../../../assets/images/projects/greensky-games/greensky-logo.png';
import home from '../../../../assets/images/projects/greensky-games/screenshots/home.png';
import company from '../../../../assets/images/projects/greensky-games/screenshots/company.png';
import work from '../../../../assets/images/projects/greensky-games/screenshots/work.png';
import media from '../../../../assets/images/projects/greensky-games/screenshots/media.png';
import cta from '../../../../assets/images/projects/greensky-games/screenshots/cta.png';
import contact from '../../../../assets/images/projects/greensky-games/screenshots/contact.png';

const GreenskyGamesProject = () => {
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
        name="Greensky Games"
        logo={logo}
        url="https://greensky-games.webflow.io/"
        projectTitle="Website Build"
        projectDescription="Creating a website for an indie gaming studio looking to attract the best talent and get favourable mentions in the press."
        gradient1="#b7d9b8"
        gradient2="#4da13b"
        images={[
          home,
          company,
          work,
          media,
          cta,
          contact
        ]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'Greensky Games needed a professional website to attract the best developers and work with top media professionals. Greensky creates intense VR games that push the limits of technology, this inspired the minimalist modern website design.',
          }
        ]}
      />
    </React.Fragment>
  );
};

export default GreenskyGamesProject;
