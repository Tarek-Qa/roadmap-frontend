// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  color: #333;
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
