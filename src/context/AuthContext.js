// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
