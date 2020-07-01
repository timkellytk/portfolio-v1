import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer'
import style from './Section.module.css';

const Section = (props) => {
  const background =
    'linear-gradient(to bottom right,' +
    props.gradient1 +
    ', ' +
    props.gradient2 +
    ')';

  const gradient = {
    background: background,
  };

  console.log(background);
  return (
    <div className={style.Section} style={gradient}>
      <ContentContainer section>
        {props.children}
      </ContentContainer>
    </div>
  );
};

export default Section;
