import axios from "axios";

const studentRepository = {
  getAll: async () => {
    const response = await axios.get(`${process.env.VITE_APP_API_URL}/api/students`);
    return response.data;
  },

  add: async (studentData) => {
    const response = await axios.post(`${process.env.VITE_APP_API_URL}/api/students`, studentData);
    return response.data;
  },

  update: async (studentId, updatedData) => {
    await axios.put(`${process.env.VITE_APP_API_URL}/api/students/${studentId}`, updatedData);
  },
};

export default studentRepository;
