// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
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

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Sign In</h1>
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
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
