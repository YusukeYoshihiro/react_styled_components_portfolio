import styled from 'styled-components';
import { Link as LinkD } from 'react-router-dom';
// import { Scroll } from 'react-scroll'\
var Scroll   = require('react-scroll');
var Element  = Scroll.Element;

export const WorksContainer = styled(Element)`
   height: 800px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #010606;

   @media screen and (max-width: 768px){
    padding: 100px 0;
     height: 100%;
   }

   @media screen and (max-width: 480px){
     padding: 100px 0;
     height: 100%;
   }
`;

export const WorksWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 0 20px;
   }
`;

export const Link = styled(LinkD)`
  text-decoration: none;
  color:#010606;
`;

export const WorksCard = styled.div`
   background: #fff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   min-height: 320px;
   padding: 30px;
   transition: all 0.2s ease-in-out;

   position: relative;
	 overflow: hidden;

   @keyframes rotate {
	  100% {
		 transform: rotate(1turn);
    }
  }

   &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
  }
    
    &::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: white;
    border-radius: 5px;
  }

  @media screen and (max-width: 780px) {
    min-height: 280px;
  }
}
	
`;

export const WorksIcon = styled.img`
   height: 160%;
   width: 160px;
   margin-bottom: 10px;
`;

export const WorksH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-bottom: 64px;

   @media screen and (max-width: 480px){
     font-size: 2rem;
   }
`;

export const WorksH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const WorksP = styled.p`
  font-size: 1rem;
  text-align: center;
`;















