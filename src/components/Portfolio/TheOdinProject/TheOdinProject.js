import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import Section from '../../Utility/Section/Section';
import LinkArrow from '../../Utility/LinkArrow/LinkArrow';
import logo from '../../../assets/images/projects/the-odin-project/odin-logo.svg';
import burgerBuilder from '../../../assets/images/projects/the-odin-project/burger-builder.png';
import calculator from '../../../assets/images/projects/the-odin-project/calculator.png';
import google from '../../../assets/images/projects/the-odin-project/google.png';
import library from '../../../assets/images/projects/the-odin-project/library.png';
import restaurant from '../../../assets/images/projects/the-odin-project/restaurant.png';
import ticTacToe from '../../../assets/images/projects/the-odin-project/tic-tac-toe.png';
import toDoList from '../../../assets/images/projects/the-odin-project/to-do-list.png';
import rockPaperScissors from '../../../assets/images/projects/the-odin-project/rock-paper-scissors.png';
import weatherApp from '../../../assets/images/projects/the-odin-project/project-weather-app.png';
import newsweek from '../../../assets/images/projects/the-odin-project/newsweek-clone.png';
import tnw from '../../../assets/images/projects/the-odin-project/tnw-clone.png';
import apple2014 from '../../../assets/images/projects/the-odin-project/apple-2014-clone.png';
import nyt from '../../../assets/images/projects/the-odin-project/new-york-times-clone.png';
import youtube from '../../../assets/images/projects/the-odin-project/youtube-clone.png';
import battleship from '../../../assets/images/projects/the-odin-project/battleship.png';
import style from './TheOdinProject.module.css';

const TheOdinProject = () => {
  return (
    <Section gradient1="#e0e0e0" gradient2="#eddfc8">
      <div className={style.Content}>
        <img src={logo} alt="the odin project logo" />
        <h2>Projects from The Odin Project Bootcamp</h2>
        <p>
          The Odin Project is a full stack web development bootcamp where you
          create websites with JavaScript, React and NodeJS
        </p>
      </div>
      <LinkArrow link="https://github.com/timkellytk">
        View projects on GitHub
      </LinkArrow>
      <div className={style.SectionTop}>
        <div className={style.PhotoContainer}>
          <ProjectItem
            image={nyt}
            link="https://github.com/timkellytk/project-new-york-times-clone"
            alt="new york times clone"
          />
          <ProjectItem
            image={battleship}
            link="https://github.com/timkellytk/project-battleship"
            alt="battleship game"
          />
          <ProjectItem
            image={weatherApp}
            link="https://github.com/timkellytk/project-weather-app"
            alt="weather app"
          />
          <ProjectItem
            image={ticTacToe}
            link="https://timkellytk.github.io/project-tic-tac-toe/"
            alt="tic tac toe game"
          />
          <ProjectItem
            image={burgerBuilder}
            link="https://timkellytk.github.io/project-react-burger-app"
            alt="burger builder"
          />
          <ProjectItem
            image={library}
            link="https://timkellytk.github.io/project-react-library"
            alt="online book library"
          />
          <ProjectItem
            image={rockPaperScissors}
            link="https://timkellytk.github.io/project-rock-paper-scissors"
            alt="rock paper scissors"
          />
        </div>
      </div>
      <div className={style.SectionBottom}>
        <div className={style.PhotoContainer}>
          <ProjectItem
            image={youtube}
            link="https://github.com/timkellytk/project-youtube-clone"
            alt="youtube clone"
          />
          <ProjectItem
            image={apple2014}
            link="https://github.com/timkellytk/project-apple-2014-clone"
            alt="apple 2014 clone"
          />
          <ProjectItem
            image={newsweek}
            link="https://github.com/timkellytk/project-newsweek-clone"
            alt="newsweek clone"
          />
          <ProjectItem
            image={tnw}
            link="https://github.com/timkellytk/project-the-next-web-clone"
            alt="the next web clone"
          />
          <ProjectItem
            image={restaurant}
            link="https://timkellytk.github.io/project-restaurant-website"
            alt="restaurant website"
          />
          <ProjectItem
            image={toDoList}
            link="https://timkellytk.github.io/project-to-do-list"
            alt="to do list website"
          />
          <ProjectItem
            image={calculator}
            link="https://timkellytk.github.io/project-calculator"
            alt="calculator"
          />
          <ProjectItem
            image={google}
            link="https://timkellytk.github.io/project-google-homepage/"
            alt="google homepage"
          />
        </div>
      </div>
    </Section>
  );
};

export default TheOdinProject;
