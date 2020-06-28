import React from 'react';
import Section from '../../components/Utility/Section/Section';
import LinkArrow from '../../components/Utility/LinkArrow/LinkArrow';
import style from './PortfolioPreview.module.css';

const PortfolioPreview = (props) => {
  return (
    <Section gradient1={props.gradient1} gradient2={props.gradient2}>
      <div className={style.Grid}>
        <div>
          <img src={props.logo} alt={props.name + ' logo'} width="70%" />
          <p>{props.description}</p>
          <LinkArrow link={props.link} internal>
            {'View ' + props.name + ' Project'}
          </LinkArrow>
        </div>
        <div>
          <p className={style.Quote}>"{props.quote}"</p>
          <div className={style.QuoteBox}>
            <img
              src={props.avatar}
              className={style.QuoteAvatar}
              alt={props.avatarName}
            />
            <div className={style.AvatarText}>
              <div>{props.avatarName}</div>
              <div>{props.avatarTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioPreview;
