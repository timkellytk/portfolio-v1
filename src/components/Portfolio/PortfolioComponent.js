import React from 'react';
import BodyContent from '../Utility/BodyContent/BodyContent';
import Animate from '../Utility/Animate/Animate';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import TheRamblerCoPreview from './TheRamblerCo/TheRamblerCoPreview/TheRamblerCoPreview';
import EvolutionaryTutorsPreview from './EvolutionaryTutors/EvolutionaryTutorsPreview/EvolutionaryTutorsPreview';
import SwarmPreview from './Swarm/SwarmPreview/SwarmPreview';
import GreenskyGamesPreview from './GreenskyGames/GreenskyGamesPreview/GreenskyGamesPreview';
import SculptrVRPreview from './SculptrVR/SculptrVRPreview/SculptrVRPreview';
import SketchboxDesignPreview from './SketchboxDesign/SketchboxDesignPreview/SketchboxDesignPreview';
import TheOdinProject from './TheOdinProject/TheOdinProject';
import style from './PortfolioComponent.module.css';

const PortfolioComponent = () => {
  return (
    <BodyContent>
      <Animate delayTitle>
        <ContentContainer>
          <h1>Web Development Portfolio</h1>
          <p>
            A collection of websites built for real-world clients and hobby
            projects created with the latest technologies.
          </p>
        </ContentContainer>
      </Animate>
      <div className="margin">
        <Animate delayContent>
          <div className={style.Grid}>
            <SwarmPreview />
            <GreenskyGamesPreview />
            <SketchboxDesignPreview />
            <TheRamblerCoPreview />
            <SculptrVRPreview />
            <EvolutionaryTutorsPreview />
          </div>
          <TheOdinProject />
        </Animate>
      </div>
    </BodyContent>
  );
};

export default PortfolioComponent;
