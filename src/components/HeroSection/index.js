import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const showResume = () => {
  window.open('https://drive.google.com/file/d/1hXQznkNbsymE7Vab0k1hGdONqySp5IG9/view?usp=sharing', '_blank')
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent >
        <HeroH1> I'm <span>Yusuke</span> , <br/>Front-End-Developer,<br/>based in Vancouver. </HeroH1>
        <HeroP> Love Code, Cook and Hockey</HeroP>
        <HeroBtnWrapper>
          <Button
          onClick={showResume}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          >
            Check it Out ! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
