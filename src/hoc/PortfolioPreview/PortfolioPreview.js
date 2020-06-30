import React from 'react';
import Section from '../../components/Utility/Section/Section';
import LinkArrow from '../../components/Utility/LinkArrow/LinkArrow';
import Quote from '../../components/Utility/Quote/Quote';
import style from './PortfolioPreview.module.css';

const PortfolioPreview = (props) => {
  return (
    <Section gradient1={props.gradient1} gradient2={props.gradient2}>
      <div className={style.Grid}>
        <div>
          <img src={props.logo} alt={props.name + ' logo'} width="70%" />
          <p>{props.description}</p>
          <LinkArrow link={props.link} internal>
            View Full Project
          </LinkArrow>
        </div>
        <Quote
          quote={props.quote}
          avatar={props.avatar}
          avatarName={props.avatarName}
          avatarTitle={props.avatarTitle}
        />
      </div>
    </Section>
  );
};

export default PortfolioPreview;
