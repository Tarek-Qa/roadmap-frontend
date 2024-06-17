// src/context/QuizContext.js
import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);

  return (
    <QuizContext.Provider value={{ answers, setAnswers, results, setResults }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
