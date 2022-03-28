/* eslint-disable import/no-named-as-default */
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthenticationContext = createContext();

export const useAuthentication = () => { return useContext(AuthenticationContext); };

function AuthenticationProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const loginWithGoogle = () => {
    return auth.signInWithPopup(getGoogleProvider());
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {!loading && children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
