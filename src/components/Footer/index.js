import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaSpotify } from 'react-icons/fa';
import {
     FooterContainer,
     FooterWrap,
     // FooterLinksContainer,
     // FooterLinksWrapper,
     // FooterLinkItems,
     // FooterLinkTitle,
     // FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRights,
     SocialIcons,
     SocialIconLink
} from './FooterElements';

const Footer = () => {
     // https://www.npmjs.com/package/react-scroll
  const toggleHome = () => {
     scroll.scrollToTop();
   }

     return (
          <FooterContainer>
               <FooterWrap>
                    {/* <FooterLinksContainer>
                         <FooterLinksWrapper>
                              <FooterLinkItems>
                                   <FooterLinkTitle > About us</FooterLinkTitle>
                                   <FooterLink to="/signin"> Hows it works</FooterLink>
                                   <FooterLink to="/signin"> Testimonials</FooterLink>
                                   <FooterLink to="/signin"> Careers</FooterLink>
                                   <FooterLink to="/signin"> Investors</FooterLink>
                                   <FooterLink to="/signin"> Terms of Service</FooterLink>
                              </FooterLinkItems>
                              <FooterLinkItems>
                                   <FooterLinkTitle > Video</FooterLinkTitle>
                                   <FooterLink to="/signin"> Submit Video</FooterLink>
                                   <FooterLink to="/signin"> Ambassadors</FooterLink>
                                   <FooterLink to="/signin"> Agency</FooterLink>
                                   <FooterLink to="/signin"> Influencer</FooterLink>
                              </FooterLinkItems>
                         </FooterLinksWrapper>

                         <FooterLinksWrapper>
                              <FooterLinkItems>
                                   <FooterLinkTitle > Contact Us</FooterLinkTitle>
                                   <FooterLink to="/signin"> Contact</FooterLink>
                                   <FooterLink to="/signin"> Support</FooterLink>
                                   <FooterLink to="/signin"> Destinations</FooterLink>
                                   <FooterLink to="/signin"> Sponsorships</FooterLink>
                              </FooterLinkItems>

                              <FooterLinkItems>
                                   <FooterLinkTitle > Social Media</FooterLinkTitle>
                                   <FooterLink to="/signin"> Instagram</FooterLink>
                                   <FooterLink to="/signin"> Facebook</FooterLink>
                                   <FooterLink to="/signin"> YouTube</FooterLink>
                                   <FooterLink to="/signin"> Twitter</FooterLink>
                              </FooterLinkItems>
                         </FooterLinksWrapper>
                    </ FooterLinksContainer> */}
                    <SocialMedia>
                         <SocialMediaWrap>
                              <SocialLogo to="/" onClick={toggleHome}>
                                   Yusuke Yoshihiro
                              </SocialLogo>
                              <WebsiteRights>Yusuke Yoshihiro &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
                              </ SocialIcons>
                         </ SocialMediaWrap>
                    </ SocialMedia>

               </ FooterWrap>
          </FooterContainer>
     )
}

export default Footer;
