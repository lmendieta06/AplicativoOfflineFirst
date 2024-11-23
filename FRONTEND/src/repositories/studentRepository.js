import axios from "axios";
import db from "../services/localDatabase";

const studentRepository = {
  getAll: async () => {
    try {
      const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/api/students`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const students = response.data;

      // Guardar estudiantes offline
      await db.students.clear();
      await db.students.bulkPut(students);

      return students;
    } catch (error) {
        console.log(error);
      // Si no hay conexión, cargar datos locales
      return await db.students.toArray();
    }
  },

  add: async (student) => {
    try {
      const response = await axios.post(
        `${import.meta.env.REACT_APP_API_URL}/api/students`,
        student,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (error) {
        console.log(error);
      // Guardar operación pendiente para sincronización
      await db.pendingSync.add({ type: "addStudent", data: student });
      return student; // Retornar localmente
    }
  },

  update: async (studentId, updatedData) => {
    try {
      await axios.put(
        `${import.meta.env.REACT_APP_API_URL}/api/students/${studentId}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
    } catch (error) {
      // Guardar cambios pendientes
      await db.pendingSync.add({
        type: "updateStudent",
        data: { studentId, updatedData },
      });

      console.log(error);
    }
  },
};

export default studentRepository;
