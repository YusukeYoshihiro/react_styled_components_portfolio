import styled from 'styled-components';

export const InfoContainer = styled.div`
   color : #fff;
   background-color: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

   @media screen and (max-width: 768px) {
     padding: 100px 0;
   }
`;

export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 860px;
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2' `)};

  @media screen and (max-width: 768px) {
     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
 /* transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)};
 transition: transform .4s ease-out; */

 /* @media screen and (max-width: 768px){
  transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)};
 transition: transform .4s ease-out;
 } */
`;

export const Column2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
 /* transform: ${({scroll}) => (scroll ? `translate(0,0)` : `translate(-500px,0)`)}; */
 /* transition: transform .4s ease-out; */
`;

export const ColumnSkill = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
 /* transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)}; 
 transition: transform .4s ease-out;  */
`;

export const ColumnSkill2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
 /* transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)};
 transition: transform .4s ease-out; */
`;

export const ColumnContact = styled.div`
 background: ${({objStyle}) => (objStyle)};
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
 /* transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)}; 
 transition: transform .4s ease-out;  */
`;

export const ColumnContact2 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col2;
 /* transform: ${({scroll}) => (scroll ? `translate(0, 0)` : `translate(500px, 0)`)};
 transition: transform .4s ease-out; */
`;



export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0;
 padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1;
   font-weight: 600;
   color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};

   @media screen and (max-width: 480px) {
     font-size: 32px;
   }
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText})=> (darkText ? '#010606': '#fff')};
`;

export const Subtitle3 = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText})=> (darkText ? '#fff': '#010606')};
`;

// For infoSec_2.js
export const SkillsWrap = styled.div`
  color: ${({darkText})=> (darkText ? '#010606': '#fff')};

  @media screen and (max-width: 378px){
    p{
      font-size: 15px;
      white-space: nowrap;
    }
  }
`;


export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
`;

export const ImgWrapSkill = styled.div`
   max-width: 555px;
   height: 100%;

   @media screen and (max-width: 768px) {
    width: 300px;
    height: 350px;
   }
`;


export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;



