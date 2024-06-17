// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled(Link)`
  background: #fff;
  color: #6e8efb;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #6e8efb;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const Home = () => {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.h1 animate={{ scale: 1.1 }} transition={{ yoyo: Infinity, duration: 0.5 }}>Welcome to Career Guidance</motion.h1>
      <Button to="/quiz">Start Quiz</Button>
    </Container>
  );
};

export default Home;
