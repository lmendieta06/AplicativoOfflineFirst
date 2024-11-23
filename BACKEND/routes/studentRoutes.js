import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { getAllStudents, createStudent, editStudent } from "../controllers/studentController.js";

const router = express.Router();

// Rutas protegidas para estudiantes
router.get("/", protect, getAllStudents); // Obtener todos los estudiantes
router.post("/", protect, createStudent); // Crear estudiante
router.put("/:id", protect, editStudent); // Editar estudiante

export default router;
