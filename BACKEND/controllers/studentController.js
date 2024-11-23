import { getStudents, addStudent, updateStudent } from "../useCases/manageStudents.js";

export const getAllStudents = async (req, res) => {
  const students = await getStudents();
  res.json(students);
};

export const createStudent = async (req, res) => {
  const student = await addStudent(req.body);
  res.status(201).json(student);
};

export const editStudent = async (req, res) => {
  await updateStudent(req.params.id, req.body);
  res.status(204).end();
};
