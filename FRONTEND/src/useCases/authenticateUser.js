import authRepository from "../repositories/authRepository";

// Caso de uso para iniciar sesión
export const loginUser = async (email, password) => {
  const { token, user } = await authRepository.login(email, password);
  return { token, user };
};

// Caso de uso para registrar un usuario
export const registerUser = async (name, email, password) => {
  const user = await authRepository.register(name, email, password);
  return user;
};
