import React from 'react';
import HelmetHOC from '../../../../hoc/Helmet/Helmet';
import PortfolioProject from '../../../../hoc/PortfolioProject/PortfolioProject';
import ogEvolutionary from '../../../../assets/images/openGraph/ogEvolutionary.png';
import avatar from '../../../../assets/images/projects/evolutionary-tutors/darren-pehn.jpeg';
import logo from '../../../../assets/images/projects/evolutionary-tutors/evolutionary-logo.png';
import home from '../../../../assets/images/projects/evolutionary-tutors/screenshots/home.png';
import infoCards from '../../../../assets/images/projects/evolutionary-tutors/screenshots/info-cards.png';
import tickpoints from '../../../../assets/images/projects/evolutionary-tutors/screenshots/tickpoints.png';
import sydney from '../../../../assets/images/projects/evolutionary-tutors/screenshots/sydney.png';
import melbourne from '../../../../assets/images/projects/evolutionary-tutors/screenshots/melbourne.png';
import pricing from '../../../../assets/images/projects/evolutionary-tutors/screenshots/pricing.png';
import reviews from '../../../../assets/images/projects/evolutionary-tutors/screenshots/reviews.png';
import tutor from '../../../../assets/images/projects/evolutionary-tutors/screenshots/tutor.png';
import tutorsPreview from '../../../../assets/images/projects/evolutionary-tutors/screenshots/tutors-preview.png';
import tutorSubjects from '../../../../assets/images/projects/evolutionary-tutors/screenshots/tutor-subjects.png';
import ebook from '../../../../assets/images/projects/evolutionary-tutors/screenshots/ebook.png';
import ebookQuiz from '../../../../assets/images/projects/evolutionary-tutors/screenshots/ebook-quiz.png';
import ebookChapters from '../../../../assets/images/projects/evolutionary-tutors/screenshots/ebook-chapters.png';
import speedScore from '../../../../assets/images/projects/evolutionary-tutors/screenshots/speed-score-evolutionary.png';

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
        url="https://www.evolutionarytutors.com.au/"
        projectTitle="Website Build For An Education Startup"
        projectDescription="A bespoke website to find students the best tutors, give tutors
              effective training and save administrators time."
        gradient1="#d3d3f9"
        gradient2="#c8f4fc"
        avatar={avatar}
        quote="Seldom do you come across such a professional and competent young person like Tim. My partner and I had the pleasure of dealing with Tim and Nathan for over six weeks during our acquisition of Evolutionary Tutors. We were particularly impressed by Tim's transparency and attention to detail throughout the entire transaction and, in particular, the handover process. His responses to our queries were always timely, detailed and well-considered."
        avatarName="Darren Pehn"
        avatarTitle="Co-Owner of Evolutionary Tutors"
        images={[
          home,
          sydney,
          melbourne,
          infoCards,
          tickpoints,
          pricing,
          reviews,
          tutorsPreview,
          tutor,
          tutorSubjects,
          ebook,
          ebookQuiz,
          ebookChapters,
          speedScore,
        ]}
        content={[
          {
            heading: 'The Context',
            paragraph:
              'Evolutionary Tutors is a private tutoring marketplace that matches primary school and high school students with private tutors in Sydney and Melbourne. Evolutionary Tutors was founded in February 2017 by Tim Kelly and Nathan Reidy before being acquired in November 2019. Tim was responsible for building the website and tutor training program for Evolutionary Tutors.',
          },
          {
            heading: 'The Requirements',
            paragraph:
              'Evolutionary Tutors is an online-only marketplace that matches parents and students with private tutors. The website needs to feel premium and trustworthy for parents, exclusive and attractive for tutors and simple to update tutors and subjects for administrators.',
          },
        ]}
      />
    </React.Fragment>
  );
};

export default EvolutionaryTutorsProject;
