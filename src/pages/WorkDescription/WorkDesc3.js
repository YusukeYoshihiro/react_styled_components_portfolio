import React from 'react'
import { Button } from '../../components/ButtonElement';
import  workImg from '../../images/MovieApp.png';

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
  BtnWrap, 
  ImgWrap, 
  Img,
} from  './WorkDescElements';

const visitWeb = () => {
  window.open('https://yusukeyoshihiro.github.io/netflix_clone_app/', '_blank')
}

const movieAppImg = workImg;

const WorkDesc3 = (
  {
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    // img,
    alt,
    primary,
    dark,
    dark2,
    // scroll,
  }
) => {
  return (
    <>
       <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <br/><br/>
                  <h3>&lt; Languages /&gt;</h3><br/>
                   <p> React, React-Redux, Sass</p><br/>

                   <h3>&lt; Databese ＆ Tools /&gt;</h3><br/>
                   <p> The Movie Database API, Firebase, Diagrams.net</p>
                </Subtitle>
                <BtnWrap>
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
                    onClick={visitWeb}
                  > 
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={movieAppImg} alt={alt} />
              </ImgWrap>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default WorkDesc3;