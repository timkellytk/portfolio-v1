import React from 'react';
import PropTypes from 'prop-types';
import style from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.image} alt={props.alt} className={style.Photo} />
    </a>
  );
};

ProjectItem.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ProjectItem;
