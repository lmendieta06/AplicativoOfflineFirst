import { createContext, useState } from "react";
import { login } from "../services/authService";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const loginUser = async (email, password) => {
    const { token, user } = await login(email, password);
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Añade las validaciones de PropTypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthContext;
