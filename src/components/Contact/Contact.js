import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogContact from '../../assets/images/openGraph/ogContact.png';

const Contact = (props) => {
  const SEO = (
    <HelmetHOC
      title="Contact | Tim Kelly, Front-End Web Developer"
      description="Tim Kelly is a front-end web developer in Sydney, Australia. Get in touch with Tim for your next website project."
      image={ogContact}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <div>contact</div>
    </React.Fragment>
  );
};

export default Contact;
