import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href="tel:+96337082264">+963937082264</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href="mailto:ghaethoo2001.go@gmail.com">
            ghaith.f.othman@gmail.com{' '}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href="https://github.com/Ghaith-13">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/ghaith_othman_11">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
