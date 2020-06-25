import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import Animate from '../Utility/Animate/Animate';
import Section from '../Utility/Section/Section';
import Button from '../Utility/Button/Button';
import burgerBuilder from '../../assets/images/projects/the-odin-project/burger-builder.png';
import calculator from '../../assets/images/projects/the-odin-project/calculator.png';
import google from '../../assets/images/projects/the-odin-project/google.png';
import library from '../../assets/images/projects/the-odin-project/library.png';
import restaurant from '../../assets/images/projects/the-odin-project/restaurant.png';
import ticTacToe from '../../assets/images/projects/the-odin-project/tic-tac-toe.png';
import toDoList from '../../assets/images/projects/the-odin-project/to-do-list.png';
import rockPaperScissors from '../../assets/images/projects/the-odin-project/rock-paper-scissors.png';
import style from './Projects.module.css';

const Projects = () => {
  return (
    <Animate delayContent>
      <Section colour="#eee">
        <h2>Review some of my projects from The Odin Project Bootcamp</h2>
        <Button link="https://github.com/timkellytk">
          View all projects on GitHub
        </Button>
        <div className={style.PhotoSection}>
          <div className={style.PhotoContainer}>
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
        <div className={style.PhotoSection2}>
          <div className={style.PhotoContainer}>
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
    </Animate>
  );
};

export default Projects;