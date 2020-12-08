import React from 'react';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
     FooterContainer,
     FooterWrap,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinkItems,
     FooterLinkTitle,
     FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRights,
     SocialIcons,
     SocialIconLink
} from './FooterElements';

const Footer = () => {
     return (
          <FooterContainer>
               <FooterWrap>
                    <FooterLinksContainer>
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
                    </ FooterLinksContainer>
                    <SocialMedia>
                         <SocialMediaWrap>
                              <SocialLogo to="/">
                                   Yusuke Yoshihiro
                              </SocialLogo>
                              <WebsiteRights>Yusuke Yoshihiro &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                              <SocialIcons>
                                   <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                   </SocialIconLink>
                                   <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                   </SocialIconLink>
                                   <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                        <FaYoutube />
                                   </SocialIconLink>
                                   <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                        <FaTwitter />
                                   </SocialIconLink>
                                   <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
                                        <FaLinkedin />
                                   </ SocialIconLink>
                              </ SocialIcons>
                         </ SocialMediaWrap>
                    </ SocialMedia>

               </ FooterWrap>
          </FooterContainer>
     )
}

export default Footer;
