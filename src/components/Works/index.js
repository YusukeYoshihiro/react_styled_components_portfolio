import React, { useState } from 'react';
import Icon1 from '../../assets/images/Cricket_Logo.png';
import Icon2 from '../../assets/images/Lacrosse_works.png';
import Icon3 from '../../assets/images/Y\'sFilm_logo.png';
import Icon4 from '../../assets/images/workDescFour.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  WorksContainer,
  WorksH1,
  WorksWrapper,
  WorksCard,
  WorksIcon,
  WorksH2,
  WorksP,
  Link,
} from './WorksElements'

// import {
//   Button
// } from '../ButtonElement';

AOS.init();

const Works = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <WorksContainer name="works" basename="works">
      <WorksH1>My Projects</WorksH1>
      <WorksWrapper>
        <Link to={'/cricket'} onClick={handleClick} >
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon1} />
            <WorksH2>Cricket Project</WorksH2>
            <WorksP>Built actual website for local cricket organization.
            </WorksP>
          </WorksCard>
        </Link>

        <Link to={'/lacrosse'} onClick={handleClick}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000">
            <WorksIcon src={Icon2} />
            <WorksH2>Lacrosse Project</WorksH2>
            <WorksP>Built actual website for Pro Lacrosse Caliber for real client. 
            <br/>
            </WorksP>
          </WorksCard>
        </Link>

        <Link to={'/movieApp'} onClick={handleClick}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000" >
            <WorksIcon src={Icon3} />
            <WorksH2>Movie App Project</WorksH2>
            <WorksP>Built movie app as own project with React.js, Firebase</WorksP>
          </WorksCard>
        </Link>

        <Link to={'/ecommerce'} onClick={handleClick}>
          <WorksCard data-aos="zoom-in" data-aos-duration="1000"  >
            <WorksIcon src={Icon4} />
            <WorksH2>E-commerce App Project</WorksH2>
            <WorksP>Coming Soon !</WorksP>
          </WorksCard>
        </Link>

      </WorksWrapper>
    </WorksContainer>
  )
}

export default Works;
