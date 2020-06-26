import React from 'react';
import resume from '../../../../assets/pdfs/resume.pdf';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <p>
      <a className={style.Resume} href={resume}>
        View resume (PDF 42kb)
      </a>
    </p>
  );
};

export default Resume;
