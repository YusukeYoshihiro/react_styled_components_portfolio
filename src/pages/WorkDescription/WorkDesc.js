import React,{} from 'react'
import { Button } from '../../components/ButtonElement';
// import Navbar from '../../components/Navbar';
// import Sidebar from '../../components/Sidebar';
import workImgOne from '../../images/MockImgCricket.png';
import {motion} from 'framer-motion';
import {animationOne, transition, } from "../../animations";

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
  window.open('https://yusukeyoshihiro.github.io/Cricket_Club_Website/index.html', '_blank')
}

const showCertification = () => {
  window.open('https://drive.google.com/file/d/1HcZlGWoMhLvcl0cKtIVffq-RMd_1pEqY/view?usp=sharing', '_blank')
}

const cricketImg = workImgOne;

const WorkDesc = (
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
    buttonLabel2,
    // img,
    alt,
    primary,
    dark,
    dark2,
    // scroll,
  }
) => {
  // const [isOpen, setIsOpen]  = useState(false);

  //  const toggle = () => {
  //    setIsOpen(!isOpen);
  //  }

  return (
    <>
       <motion.div 
       initial="out" 
       animate="in" 
       exit="out" 
       variants={animationOne}
       transition={transition}
       >
       {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/> */}
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
                   <p> HTML, CSS, ES6, JQuery, JAVA</p><br/>

                   <h3>&lt; Databese ＆ Tools /&gt;</h3><br/>
                   <p> mySQL, Figma, Goole-Form</p>
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
                  <div></div>
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
                    onClick={showCertification}
                  > 
                    {buttonLabel2}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 >
              <ImgWrap>
                <Img src={cricketImg} alt={alt} />
              </ImgWrap>
            </Column2>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      </motion.div>
    </>
  )
}

export default WorkDesc;