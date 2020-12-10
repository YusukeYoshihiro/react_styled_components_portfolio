import React from 'react';
import Icon1 from '../../images/Cricket_Logo.png';
import Icon2 from '../../images/Lacrosse_works.png';
import Icon3 from '../../images/netfilm_img.png';
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
            <WorksP>Built actual website for local cricket organization in college program. </WorksP>
          </WorksCard>

          <WorksCard>
            <WorksIcon src={Icon2}/>
            <WorksH2>Lacrosse Project</WorksH2>
            <WorksP>Built actual website for Pro Lacrosse Caliber for real client. </WorksP>
          </WorksCard>

          <WorksCard>
            <WorksIcon src={Icon3}/>
            <WorksH2>Movie App Project</WorksH2>
            <WorksP>Built  movie app as own project with React, React-Redux. </WorksP>
          </WorksCard>
        </WorksWrapper>
      </WorksContainer>
  )
}

export default Works;
