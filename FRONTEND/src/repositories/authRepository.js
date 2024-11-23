import { login, register } from "../services/authService";

const authRepository = {
  // Función para iniciar sesión
  login: async (email, password) => {
    return await login(email, password);
  },

  // Función para registrar usuario
  register: async (name, email, password) => {
    return await register(name, email, password);
  },
};

export default authRepository;
