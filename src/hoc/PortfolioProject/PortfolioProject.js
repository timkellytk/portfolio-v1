import React from 'react';
import Animate from '../../components/Utility/Animate/Animate';
import BodyContent from '../../components/Utility/BodyContent/BodyContent';
import ContentContainer from '../../components/Utility/ContentContainer/ContentContainer';
import Button from '../../components/Utility/Button/Button';
import BackArrow from '../../components/Utility/BackArrow/BackArrow';
import Quote from '../../components/Utility/Quote/Quote';
import Divider from '../../components/Utility/Divider/Divider';
import style from './PortfolioProject.module.css';

const PortfolioProject = (props) => {
  const gradient = {
    background:
      'linear-gradient(to bottom right,' +
      props.gradient1 +
      ', ' +
      props.gradient2 +
      ')',
  };

  const imageScroll = props.images
    .slice(0, 7)
    .map((image) => (
      <img src={image} className={style.Image} alt="ebook website" />
    ));
  const imageScreenshot = props.images.map((image) => (
    <img src={image} className={style.Screenshot} alt="ebook website" />
  ));

  let content = null;

  if (props.content) {
    content = props.content.map((topic) => (
      <React.Fragment>
        <h1>{topic.heading}</h1>
        <p>{topic.paragraph}</p>
      </React.Fragment>
    ));
  }

  return (
    <React.Fragment>
      <div className={[style.Hero, 'negativeNavMargin'].join(' ')}>
        <div className={style.HeroContent}>
          <Animate delayTitle>
            <BackArrow link="/portfolio" internal>
              Back To Portfolio
            </BackArrow>
            <div>
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={props.logo}
                  className={style.Logo}
                  alt={props.name + 'Logo'}
                />
              </a>
            </div>
            <h1>{props.projectTitle}</h1>
            <p>{props.projectDescription}</p>
          </Animate>
        </div>
        <div className={style.HeroImageSection} style={gradient}>
          <Animate delayTitle>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <div className={style.ImageContainer}>{imageScroll}</div>
            </a>
          </Animate>
        </div>
      </div>
      <BodyContent>
        <ContentContainer>
          <Animate delayTitle>
            <div className="margin">
              <Quote
                avatar={props.avatar}
                quote={props.quote}
                avatarName={props.avatarName}
                avatarTitle={props.avatarTitle}
              />
              <Divider />
              {content}
              <h1>The Result</h1>
              <div className={style.ViewWebsiteMargin}>
                <Button link={props.url}>Visit The Website</Button>
              </div>
              {imageScreenshot}
            </div>
          </Animate>
        </ContentContainer>
      </BodyContent>
    </React.Fragment>
  );
};

export default PortfolioProject;
