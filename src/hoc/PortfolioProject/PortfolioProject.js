import React from 'react';
import Animate from '../../components/Utility/Animate/Animate';
import BodyContent from '../../components/Utility/BodyContent/BodyContent';
import ContentContainer from '../../components/Utility/ContentContainer/ContentContainer';
import LinkArrow from '../../components/Utility/LinkArrow/LinkArrow';
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

  let context = null;
  let problem = null;
  let solution = null;

  if (props.context) {
    context = (
      <React.Fragment>
        <h1>The Context</h1>
        <p>{props.context}</p>
      </React.Fragment>
    );
  }
  if (props.problem) {
    problem = (
      <React.Fragment>
        <h1>The Problem</h1>
        <p>{props.problem}</p>
      </React.Fragment>
    );
  }
  if (props.solution) {
    solution = (
      <React.Fragment>
        <h1>The Solution</h1>
        <p>{props.solution}</p>
      </React.Fragment>
    );
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
              <img
                src={props.logo}
                className={style.Logo}
                alt={props.name + 'Logo'}
              />
            </div>
            <h1>{props.projectTitle}</h1>
            <p>{props.projectDescription}</p>
          </Animate>
        </div>
        <div className={style.HeroImageSection} style={gradient}>
          <Animate delayTitle>
            <div className={style.ImageContainer}>{imageScroll}</div>
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
              {context}
              {problem}
              {solution}
              <h1>The Result</h1>
              <div className={style.ViewWebsiteMargin}>
                <LinkArrow link={props.url}>Visit The Website</LinkArrow>
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
