// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
