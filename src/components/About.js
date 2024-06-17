// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  color: #333;
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <p>Welcome to Career Guidance. We help you find the perfect career path based on your personality traits and preferences.</p>
    </Container>
  );
};

export default About;
