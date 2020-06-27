import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogContact from '../../assets/images/openGraph/ogContact.png';
import Button from '../Utility/Button/Button';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import Animate from '../Utility/Animate/Animate';
import style from './Contact.module.css';
import github from '../../assets/images/utility/github.png';
import linkedin from '../../assets/images/utility/linkedin.png';
import instagram from '../../assets/images/utility/instagram.png';

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
      <ContentContainer>
        <div className={style.CentreContent}>
          <Animate delayTitle>
            <div className={style.CentreContent}>
              <div className={style.Avatar} />
              <h1 className={style.Title}>Get in touch</h1>
              <p>
                I'm here to help you with your next website or web development
                role. Get in touch at{' '}
                <a href="mailto:timpkelly1@gmail.com">timpkelly1@gmail.com</a>.
              </p>
            </div>
          </Animate>
          <Animate delayContent>
            <div className={style.ContactContainer}>
              <Button link="mailto:timpkelly1@gmail.com">Email Me</Button>
              <div className={style.SocialContainer}>
                <a
                  href="https://github.com/timkellytk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} className={style.SocialIcon} alt="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tim-patrick-kelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    className={style.SocialIcon}
                    alt="linkedin"
                  />
                </a>
                <a
                  href="https://www.instagram.com/thetimman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    className={style.SocialIcon}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </ContentContainer>
    </React.Fragment>
  );
};

export default Contact;
