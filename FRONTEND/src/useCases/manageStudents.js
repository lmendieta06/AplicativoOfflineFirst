import studentRepository from "../repositories/studentRepository";

export const getStudents = async () => {
  // Lógica de negocio: Obtener estudiantes desde el repositorio
  return await studentRepository.getAll();
};

export const addStudent = async (student) => {
  // Lógica de negocio: Agregar estudiante
  return await studentRepository.add(student);
};

export const updateStudent = async (studentId, updatedData) => {
  // Lógica de negocio: Actualizar estudiante
  return await studentRepository.update(studentId, updatedData);
};
