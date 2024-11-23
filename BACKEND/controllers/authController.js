import { loginUser, postUser } from "../useCases/authenticateUser.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    res.status(401).json({ message: error.message || "Credenciales inválidas." });
  }
};

export const register = async (req, res) => {
  console.log("Datos recibidos en el backend:", req.body); // Depuración
  const { name, email, password } = req.body;

  try {
    const user = await postUser(name, email, password);
    res.status(201).json({ message: "Usuario registrado con éxito.", user });
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    res.status(400).json({ message: error.message || "Error al registrar usuario." });
  }
};
