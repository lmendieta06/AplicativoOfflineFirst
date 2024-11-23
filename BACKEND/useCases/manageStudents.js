import studentRepository from "../repositories/studentRepository.js";

export const getStudents = async () => {
  const students = await studentRepository.getAll();
  if (!students || students.length === 0) {
    throw new Error("No se encontraron estudiantes.");
  }
  return students;
};

export const getStudentById = async (studentId) => {
  if (!studentId) {
    throw new Error("El ID del estudiante es obligatorio.");
  }

  const student = await studentRepository.getById(studentId);
  if (!student) {
    throw new Error("Estudiante no encontrado.");
  }
  return student;
};

export const addStudent = async (studentData) => {
  const { name, age, grades } = studentData;
  if (!name || !age || !Array.isArray(grades)) {
    throw new Error("Todos los campos son obligatorios y las calificaciones deben ser un arreglo.");
  }

  const newStudent = await studentRepository.add(studentData);
  if (!newStudent) {
    throw new Error("No se pudo crear el estudiante.");
  }
  return newStudent;
};

export const updateStudent = async (studentId, updatedData) => {
  if (!studentId) {
    throw new Error("El ID del estudiante es obligatorio.");
  }

  const updatedStudent = await studentRepository.update(studentId, updatedData);
  if (!updatedStudent) {
    throw new Error("Estudiante no encontrado o no se pudo actualizar.");
  }

  return updatedStudent;
};

export const deleteStudent = async (studentId) => {
  if (!studentId) {
    throw new Error("El ID del estudiante es obligatorio.");
  }

  const deletedStudent = await studentRepository.delete(studentId);
  if (!deletedStudent) {
    throw new Error("Estudiante no encontrado o no se pudo eliminar.");
  }

  return deletedStudent;
};
