import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call me</LinkTitle>
          <LinkItem href="tel:+31(0)62-16-153-25">+31(0)62-16-153-25</LinkItem>

        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lucpeters1998@gmail.com">lucpeters1998@gmail.com</LinkItem>

        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Modern problems require modern solutions</Slogan>
        </CompanyContainer>
        <SocialContainer>
            <SocialIcons href='https://github.com/LucPeters1'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/luc-peters-4b2263100/'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://twitter.com/pingu_fps'>
            <AiFillTwitterSquare size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
