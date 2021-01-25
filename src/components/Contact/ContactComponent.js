import React from 'react';
import Button from '../Utility/Button/Button';
import BodyContent from '../Utility/BodyContent/BodyContent';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import Animate from '../Utility/Animate/Animate';
import style from './Contact.module.css';
import github from '../../assets/images/utility/github.png';
import linkedin from '../../assets/images/utility/linkedin.png';

const ContactComponent = () => {
  return (
    <div className="margin">
      <BodyContent>
        <ContentContainer>
          <div className={style.CentreContent}>
            <Animate delayTitle>
              <div className={style.CentreContent}>
                <div className={style.Avatar} />
                <h1 className={style.Title}>Get in touch</h1>
                <p>
                  Contact me at{' '}
                  <a href="mailto:timpkelly1@gmail.com">timpkelly1@gmail.com</a>{' '}
                  for upcoming web developer roles.
                </p>
              </div>
              <div className={style.ContactContainer}>
                <Button link="mailto:timpkelly1@gmail.com">Email Me</Button>
                <div className={style.SocialContainer}>
                  <a
                    href="https://github.com/timkellytk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      className={style.SocialIcon}
                      alt="github"
                    />
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
                </div>
              </div>
            </Animate>
          </div>
        </ContentContainer>
      </BodyContent>
    </div>
  );
};

export default ContactComponent;
