// Contact Pert
import React from 'react'
import { Button } from '../ButtonElement'
import AboutMeImg from '../../images/about_me.svg';
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaTwitter} from 'react-icons/fa';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle3,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const  myImg  = AboutMeImg;

const InfoSec_3 = ({
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
  dark2
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
                <Subtitle3 darkText={darkText}>{description}</Subtitle3>
                <SocialIcons>
                                   <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                   </SocialIconLink>
                                   <SocialIconLink href="https://www.instagram.com/?hl=ja" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                   </SocialIconLink>
                                   <SocialIconLink href="https://github.com/YusukeYoshihiro" target="_blank" aria-label="Github">
                                        <FaGithub />
                                   </SocialIconLink>
                                   <SocialIconLink href="https://twitter.com/TheManfromFNFa1" target="_blank" aria-label="Twitter">
                                        <FaTwitter />
                                   </SocialIconLink>
                                   <SocialIconLink href="https://www.linkedin.com/in/yusuke-yoshihiro-ab46491b2/" target="_blank" aria-label="Linkdin">
                                        <FaLinkedin />
                                   </ SocialIconLink>
                                   <SocialIconLink href="https://open.spotify.com/user/0qibuxlh5wun8410w367fjush " target="_blank" aria-label="Spotify">
                                        <FaSpotify />
                                   </ SocialIconLink>
                              </ SocialIcons><br/>
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
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1 >

            <Column2>
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

export default InfoSec_3;
