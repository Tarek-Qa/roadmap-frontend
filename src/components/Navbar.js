// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Nav = styled(motion.nav)`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
      <h1>Career Guidance</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink as="button" onClick={handleSignOut}>Sign Out</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
