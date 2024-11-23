import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionMongo } from "./config/db.js";
import userRouter from "./routes/authRoutes.js";
import studentRouter from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

// database
connectionMongo();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", userRouter);
app.use("/api/students", studentRouter);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
