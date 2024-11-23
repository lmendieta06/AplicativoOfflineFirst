import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { getAllStudents, createStudent, editStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();

// Rutas protegidas para estudiantes
studentRouter.get("/", protect, getAllStudents); // Obtener todos los estudiantes
studentRouter.post("/", protect, createStudent); // Crear estudiante
studentRouter.put("/:id", protect, editStudent); // Editar estudiante

export default studentRouter;
