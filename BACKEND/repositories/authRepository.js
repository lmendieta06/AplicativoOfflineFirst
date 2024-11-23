import axios from "axios";

const authRepository = {
  login: async (email, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  },

  register: async (name, email, password) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  },
};

export default authRepository;
