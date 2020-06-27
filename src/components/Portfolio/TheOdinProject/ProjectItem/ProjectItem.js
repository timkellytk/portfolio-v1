import React from 'react';
import style from './ProjectItem.module.css';

const ProjectItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.image} alt={props.alt} className={style.Photo} />
    </a>
  );
};

export default ProjectItem;
