import jsPDF from "jspdf";

export const generateStudentReport = (student) => {
  const doc = new jsPDF();
  doc.text(`Reporte de Estudiante: ${student.name}`, 10, 10);
  doc.text(`Edad: ${student.age}`, 10, 20);
  doc.text("Notas:", 10, 30);

  student.grades.forEach((grade, index) => {
    doc.text(`${grade.subject}: ${grade.grade}`, 10, 40 + index * 10);
  });

  doc.save(`${student.name}_reporte.pdf`);
};
