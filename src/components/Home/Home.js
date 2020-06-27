import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import Hero from './Hero/Hero';
import About from './About/About';
import ogHome from '../../assets/images/openGraph/ogHome.png';

const Home = () => {
  let SEO = (
    <HelmetHOC
      title="Tim Kelly, Front-End Web Developer In Sydney, Australia | timkelly.dev"
      description="Tim Kelly is a front-end web developer that creates beautiful, responsive websites with HTML, CSS, JavaScript and React. Tim has built websites for The Rambler Co And Evolutionary Tutors. Tim is available for freelance web development to a select client base."
      image={ogHome}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <Hero />
      <About />
    </React.Fragment>
  );
};

export default Home;
