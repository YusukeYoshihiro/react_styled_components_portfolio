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


const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> I'm Yusuke, Front-End-Developer,<br/>based in Vancouver. </HeroH1>
        <HeroP> Love to Code, Cook and Travel.</HeroP>
        <HeroBtnWrapper>
          <Button 
          to="signup" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover} 
          primary='true'
          dark='true'
          >
            My Passions Here {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection