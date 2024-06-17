// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Career Guidance. All Rights Reserved.</p>
      <div>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
