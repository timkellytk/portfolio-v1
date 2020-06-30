import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogContact from '../../assets/images/openGraph/ogContact.png';
import ContactComponent from './ContactComponent';

const Contact = () => {
  const SEO = (
    <HelmetHOC
      title="Contact | Tim Kelly, Front-End Web Developer | timkelly.dev"
      description="Tim Kelly is a front-end web developer in Sydney, Australia. Get in touch with Tim for your next website project."
      image={ogContact}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <ContactComponent />
    </React.Fragment>
  );
};

export default Contact;
