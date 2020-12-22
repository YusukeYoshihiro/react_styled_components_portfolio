// Skills Part
import React from 'react'
// import { Button } from '../ButtonElement'
import SkillsImg from '../../assets/images/SkillImg.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnSkill,
  ColumnSkill2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SkillsWrap,
  // BtnWrap,
  ImgWrapSkill,
  Img,
} from './InfoElements';

// AOS.init();

const  skills  = SkillsImg;

// const showCertifications = () => {
//   window.open('https://drive.google.com/file/d/19Y8pxOCzbDm0EsCGIM9lQmQma269hAJD/view?usp=sharing', '_blank')
// }

const InfoSec2 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  // description,
  buttonLabel,
  // img,
  alt,
  // primary,
  // dark,
  // dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnSkill data-aos="fade-right">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                 <SkillsWrap darkText={darkText}> 
                   <h3>&lt; Languages /&gt;</h3><br/>
                   <p> HTML, CSS, Sass, ES6, JQuery, Node.js</p><br/>

                   <h3>&lt; Frameworks /&gt;</h3><br/>
                   <p> React, React-Redux, styled-components </p><br/>

                   <h3>&lt; Databese ＆ Tools /&gt;</h3><br/>
                   <p> MongoDB, Firebase, Git, mySQL, Figma, <br/> Photoshop, illustrator, XD</p>
                 </SkillsWrap>
                </Subtitle>
                {/* <BtnWrap onClick={()=> showCertifications}>
                  <Button 
                    onClick={showCertifications}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </ColumnSkill>

            <ColumnSkill2 data-aos="fade-left">
              <ImgWrapSkill>
                <Img src={skills} alt={alt} />
              </ImgWrapSkill>
            </ColumnSkill2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec2;
