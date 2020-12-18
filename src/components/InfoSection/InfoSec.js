import React from 'react'
import { Button } from '../ButtonElement'
import AboutMeImg from '../../assets/images/green_main_photo.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
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
} from './InfoElements';

// AOS.init();

const  myImg  = AboutMeImg;

const showResume = () => {
  window.open('https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/', '_blank')
}

const InfoSec = ({
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
  scroll,
  objStyle
}) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="50">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={showResume}
                  > 
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 data-aos="fade-down" data-aos-duration="1000">
              <ImgWrap>
                <Img src={myImg} alt={alt} />
              </ImgWrap>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSec;
