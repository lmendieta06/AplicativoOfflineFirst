import axios from "axios";

export const getStudents = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/students`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};
