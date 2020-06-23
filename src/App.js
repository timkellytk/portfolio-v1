import React from 'react';
import resume from './assets/pdfs/resume.pdf';
import Container from './components/Utility/Container/Container';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="maxwidth">
        <div className="logo animate">TIM KELLY</div>
        <h1 className="animate delaytitle">
          Hello, my name is Tim. I am a front-end web developer in Sydney,
          Australia
        </h1>
      </div>
      <div className="photo animate delaycontent"></div>
      <div className="maxwidth animate delaycontent">
        <p>
          I create beautiful, responsive websites using HTML, CSS, JavaScript
          and React. After completing a Bachelor's Marketing and Media at
          Macquarie University, I spent 3-years learning how to code, built and
          sold,{' '}
          <a href="https://www.evolutionarytutors.com.au/" target="blank">
            Evolutionary Tutors
          </a>{' '}
          and worked as an SEO executive in London.
        </p>
        <p>
          Currently, I'm completing the{' '}
          <a
            href="https://www.theodinproject.com/tracks/full-stack-javascript"
            target="blank"
          >
            Full Stack JavaScript Bootcamp
          </a>{' '}
          at The Odin Project and working as a freelance developer for{' '}
          <a href="https://www.therambler.co/" target="blank">
            The Rambler Co
          </a>
          .
        </p>
        <p>
          Now I'm available for a full-time role as a junior web developer in
          Sydney Australia. If you're hiring, please get in touch by any means
          of communication.
        </p>
        <p>
          <a className="resume" href={resume}>
            View resume (PDF 42kb)
          </a>
        </p>
        <div className="contact-list">
          <div className="contact">timpkelly1@gmail.com</div>
          <div className="contact">
            <a href="https://github.com/timkellytk" target="blank">
              GitHub
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/tim-patrick-kelly/"
              target="blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact">
            <a href="https://www.instagram.com/thetimman/" target="blank">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <Container static>This is a test</Container>
    </div>
  );
}

export default App;
