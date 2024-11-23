import { loginUser, registerUser } from "../useCases/authenticateUser.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser(email, password);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};

export const register = async (req, res) => {
  console.log("Datos recibidos en el backend:", req.body); // Depuración
  const { name, email, password } = req.body;

  try {
    const user = await registerUser(name, email, password);
    res.status(201).json({message:"Usuario registrado", user});
  } catch (error) {
    res.status(400).json({ message: "Error al registrar usuario" });
  }
};
