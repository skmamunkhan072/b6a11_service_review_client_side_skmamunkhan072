import React, { createContext, useState } from "react";

// Auth context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // react useState
  const [thim, setThim] = useState(false);

  const AuthContextInfo = {
    thim,
    setThim,
  };
  return (
    <AuthContext.Provider value={AuthContextInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
