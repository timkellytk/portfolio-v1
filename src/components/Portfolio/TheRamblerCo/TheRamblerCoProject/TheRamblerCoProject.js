import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogRambler from '../../../../assets/images/openGraph/ogRambler.png';
import logo from '../../../../assets/images/projects/the-rambler-co/rambler-logo.png';
import avatar from '../../../../assets/images/projects/the-rambler-co/james-vodicka.jpg';
import about from '../../../../assets/images/projects/the-rambler-co/screenshots/about.png';
import backEnd from '../../../../assets/images/projects/the-rambler-co/screenshots/back-end-rambler.png';
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
        projectTitle="Website Build"
        projectDescription="A responsive website built from scratch to showcase the travel photography and stories for James Vodicka and his team"
        gradient1="#e8dfca"
        gradient2="#f7c7a4"
        avatar={avatar}
        quote="I have been working with Tim to build a new content-focused Australian travel website, The Rambler Co, over the past few months and have been highly impressed with his knowledge, work ethic and professionalism in helping us bring our ideas to life. Not only has Tim worked tirelessly on the design of the website... Tim has gone above and beyond in solving the problems presented to him, and has always offered appropriate solutions to any issues that have arisen. I have loved working with Tim to bring The Rambler Co to life."
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
          backEnd,
        ]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'The Rambler Co is a community of travel lovers fuelled by a desire for local discovery, sharing travel stories to inspire your next Australian adventure. Tim is responsible for building a responsive website with a bespoke design, fast loading speeds, an intuitive back-end and high-quality training documentation.',
          },
          {
            heading: 'The Requirements',
            paragraph:
              'The website needs to have a delightful design for users, a navigation to access stories and travel locations and an easy way to upload the latest stories and locations. The website needs website tracking for users and high-quality training documentation for the founder to update and maintain the website over time.',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default TheRamblerCoProject;
