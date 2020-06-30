import React from 'react';
import BodyContent from '../Utility/BodyContent/BodyContent';
import Animate from '../Utility/Animate/Animate';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import TheRamblerCoPreview from './TheRamblerCo/TheRamblerCoPreview/TheRamblerCoPreview';
import EvolutionaryTutorsPreview from './EvolutionaryTutors/EvolutionaryTutorsPreview/EvolutionaryTutorsPreview';
import TheOdinProject from './TheOdinProject/TheOdinProject';

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
          <TheRamblerCoPreview />
          <EvolutionaryTutorsPreview />
          <TheOdinProject />
        </Animate>
      </div>
    </BodyContent>
  );
};

export default PortfolioComponent;
