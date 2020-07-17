import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from '../ContentContainer/ContentContainer';
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

  return (
    <div className={style.Section} style={gradient}>
      <ContentContainer section>{props.children}</ContentContainer>
    </div>
  );
};

Section.propTypes = {
  gradient1: PropTypes.string.isRequired,
  gradient2: PropTypes.string.isRequired,
};

export default Section;
