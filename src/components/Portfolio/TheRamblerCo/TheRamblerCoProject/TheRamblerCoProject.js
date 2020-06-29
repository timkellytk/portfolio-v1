import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogRambler from '../../../../assets/images/openGraph/ogRambler.png';
import logo from '../../../../assets/images/projects/the-rambler-co/rambler-logo.png';
import avatar from '../../../../assets/images/projects/the-rambler-co/james-vodicka.jpg';
import about from '../../../../assets/images/projects/the-rambler-co/screenshots/about.png';
import blogAuthor from '../../../../assets/images/projects/the-rambler-co/screenshots/blog-author.png';
import blogContent from '../../../../assets/images/projects/the-rambler-co/screenshots/blog-content.png';
import blogFullImage from '../../../../assets/images/projects/the-rambler-co/screenshots/blog-full-image.png';
import blogHero from '../../../../assets/images/projects/the-rambler-co/screenshots/blog-hero.png';
import collective from '../../../../assets/images/projects/the-rambler-co/screenshots/collective.png';
import contribute from '../../../../assets/images/projects/the-rambler-co/screenshots/contribute.png';
import explore from '../../../../assets/images/projects/the-rambler-co/screenshots/explore.png';
import home from '../../../../assets/images/projects/the-rambler-co/screenshots/home.png';
import locationRead from '../../../../assets/images/projects/the-rambler-co/screenshots/location-read.png';
import locationTabs from '../../../../assets/images/projects/the-rambler-co/screenshots/location-tabs.png';
import newsletterCTA from '../../../../assets/images/projects/the-rambler-co/screenshots/newsletter-cta.png';

const TheRamblerCoProject = () => {
  let SEO = (
    <HelmetHOC
      title="The Rambler Co Case Study | timkelly.dev"
      description="The story behind a bespoke website that shares travel stories to inspire your next Australian adventure"
      image={ogRambler}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <PortfolioProject
        name="The Rambler Co"
        url="https://www.therambler.co/"
        logo={logo}
        projectTitle="Website Build For A Travel Photographer"
        projectDescription="A responsive website built from scratch to showcase the travel photography and stories for James Vodicka and his team"
        gradient1="#e8dfca"
        gradient2="#f7c7a4"
        avatar={avatar}
        quote="Thanks Tim, it's looking really great! So thrilled with how it's turned it - you've done an awesome job"
        avatarName="James Vodicka"
        avatarTitle="Founder of The Rambler Co"
        images={[
          home,
          blogHero,
          explore,
          blogContent,
          blogFullImage,
          blogAuthor,
          locationRead,
          locationTabs,
          about,
          collective,
          contribute,
          newsletterCTA,
        ]}
      />
    </React.Fragment>
  );
};

export default TheRamblerCoProject;
