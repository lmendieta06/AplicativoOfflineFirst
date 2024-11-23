import axios from "axios";

const authRepository = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${process.env.VITE_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error en el login:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Error en la solicitud de inicio de sesión.");
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${process.env.VITE_APP_API_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error en el registro:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Error en la solicitud de registro.");
    }
  },
};

export default authRepository;

