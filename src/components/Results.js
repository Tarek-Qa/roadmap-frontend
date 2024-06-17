// src/components/Results.js
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { QuizContext } from '../context/QuizContext';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #56ab2f, #a8e063);
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;

const Results = () => {
  const { answers, results, setResults } = useContext(QuizContext);

  useEffect(() => {
    axios.post('https://your-api-url/recommendations', { answers })
      .then(response => {
        setResults(response.data.recommendations);
      })
      .catch(error => {
        console.error('There was an error getting recommendations!', error);
      });
  }, [answers, setResults]);

  return (
    <Container initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <h1>Career Recommendations</h1>
      <List>
        {results.map((career, index) => (
          <ListItem key={index}>{career}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Results;
