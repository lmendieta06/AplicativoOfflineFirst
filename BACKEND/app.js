import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import { connectionMongo } from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// database
connectionMongo();

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
