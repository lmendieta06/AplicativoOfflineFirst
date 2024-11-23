import authRepository from "../repositories/authRepository.js";

export const loginUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("El correo y la contraseña son obligatorios.");
  }

  const { token, user } = await authRepository.login(email, password);

  if (!token || !user) {
    throw new Error("Error en las credenciales proporcionadas.");
  }

  return { token, user };
};

export const registerUser = async (name, email, password) => {
  if (!name || !email || !password) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const user = await authRepository.register(name, email, password);
  if (!user) {
    throw new Error("No se pudo registrar el usuario.");
  }

  return user;
};
