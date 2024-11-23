import Student from "../models/student.js";

// Obtener todos los estudiantes
const getAll = async () => {
  return await Student.find();
};

// Obtener un estudiante por ID
const getById = async (studentId) => {
  return await Student.findById(studentId);
};

// Crear un nuevo estudiante
const add = async (studentData) => {
  const { name, age, grades } = studentData;
  const newStudent = new Student({ name, age, grades });
  return await newStudent.save();
};

// Actualizar un estudiante por ID
const update = async (studentId, updatedData) => {
  const { name, age, grades } = updatedData;
  return await Student.findByIdAndUpdate(
    studentId,
    { name, age, grades },
    { new: true } // Devuelve el documento actualizado
  );
};

// Eliminar un estudiante por ID
const deleteStudent = async (studentId) => {
  return await Student.findByIdAndDelete(studentId);
};

export default {
  getAll,
  getById,
  add,
  update,
  delete: deleteStudent,
};
