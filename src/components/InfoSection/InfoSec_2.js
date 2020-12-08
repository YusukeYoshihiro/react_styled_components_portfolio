// Skills Part
import React from 'react'
import { Button } from '../ButtonElement'
import SkillsImg from '../../images/skillsLang.svg';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SkillsWrap,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const  skills  = SkillsImg;

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
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                 <SkillsWrap darkText={darkText}> 
                   <h3>&lt; Languages /&gt;</h3><br/>
                   <p> HTML, CSS, Sass, ES6, JQuery, JAVA</p><br/>

                   <h3>&lt; Frameworks /&gt;</h3><br/>
                   <p> React, React-Redux, styled-components</p><br/>

                   <h3>&lt; Databese ＆ Tools /&gt;</h3><br/>
                   <p> MongoDB, firebase, mySQL, Figma, Photoshop, illustrator, XD</p>
                 </SkillsWrap>
                </Subtitle>
                <BtnWrap onClick>
                  <Button 
                    to='home'
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
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={skills} alt={alt} />
              </ImgWrap>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec2;
