import React from 'react';
import Icon1 from '../../images/Works.svg';
import Icon2 from '../../images/Works.svg';
import Icon3 from '../../images/Works.svg';
import { 
  WorksContainer,
  WorksH1, 
  WorksWrapper, 
  WorksCard, 
  WorksIcon, 
  WorksH2, 
  WorksP
} from './WorksElements'


const Works = () => {
  return (
      <WorksContainer id="works">
        <WorksH1>My Works</WorksH1>
        <WorksWrapper>
          <WorksCard>
            <WorksIcon src={Icon1}/>
            <WorksH2>Cricket Project</WorksH2>
            <WorksP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit quasi suscipit </WorksP>
          </WorksCard>

          <WorksCard>
            <WorksIcon src={Icon2}/>
            <WorksH2>Lacrosse Projects</WorksH2>
            <WorksP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit quasi suscipit </WorksP>
          </WorksCard>

          <WorksCard>
            <WorksIcon src={Icon3}/>
            <WorksH2>Movie app Projects</WorksH2>
            <WorksP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit quasi suscipit </WorksP>
          </WorksCard>
        </WorksWrapper>
      </WorksContainer>
  )
}

export default Works;
