// src/components/Quiz.js
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9966, #ff5e62);
  color: #fff;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Question = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #ff5e62;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff5e62;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const ProgressBar = styled.div`
  width: 80%;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  background: #ff5e62;
  height: 10px;
  transition: width 0.3s ease;
`;

const Quiz = () => {
  const { answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [questions] = useState([
    { question: "Do you prefer working alone or in groups?", options: ["Alone", "In groups"] },
    { question: "Do you focus on details or overall vision?", options: ["Details", "Vision"] },
    // Add more questions here
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results');
    }
  };

  return (
    <Container initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
      <h1>Personality Quiz</h1>
      <ProgressBar>
        <Progress width={(currentQuestion + 1) / questions.length * 100} />
      </ProgressBar>
      <Question>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, i) => (
          <Button key={i} onClick={() => handleAnswer(option)}>{option}</Button>
        ))}
      </Question>
    </Container>
  );
};

export default Quiz;
