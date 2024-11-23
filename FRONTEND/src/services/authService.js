import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

console.log("API URL:", import.meta.env.VITE_APP_API_URL);

export const login = async (email, password) => {
  const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
    email,
    password,
  });
  return data;
};

// Función para registrar un usuario
export const register = async (name, email, password) => {
    console.log("Datos enviados al backend:", { name, email, password });
    const { data } = await axios.post(`${BASE_URL}/api/auth/register`, {
      name,
      email,
      password,
    });
    return data;
  };