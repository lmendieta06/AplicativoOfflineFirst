import studentRepository from "../repositories/studentRepository.js";

export const getStudents = async () => {
  return await studentRepository.getAll();
};

export const addStudent = async (studentData) => {
  return await studentRepository.add(studentData);
};

export const updateStudent = async (studentId, updatedData) => {
  return await studentRepository.update(studentId, updatedData);
};
