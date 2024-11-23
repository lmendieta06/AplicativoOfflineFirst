import { useQuery, useMutation, useQueryClient } from "react-query";
import { getStudents, addStudent } from "../useCases/manageStudents";

const StudentPage = () => {
  const queryClient = useQueryClient();

  const { data: students, isLoading, error } = useQuery("students", getStudents);

  const mutation = useMutation(addStudent, {
    onSuccess: () => queryClient.invalidateQueries("students"),
  });

  const handleAddStudent = () => {
    const newStudent = { name: "Nuevo Estudiante", age: 16, grades: [] };
    mutation.mutate(newStudent);
  };

  if (isLoading) return <p>Cargando estudiantes...</p>;
  if (error) return <p>Error al cargar estudiantes</p>;

  return (
    <div>
      <h1>Estudiantes</h1>
      <ul>
        {students?.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button onClick={handleAddStudent}>Agregar Estudiante</button>
    </div>
  );
};

export default StudentPage;
