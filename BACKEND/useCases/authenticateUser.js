import authRepository from "../repositories/authRepository.js";

export const loginUser = async (email, password) => {
  const { token, user } = await authRepository.login(email, password);

  return { token, user };
};

export const registerUser = async (name, email, password) => {
  const user = await authRepository.register(name, email, password);
  return user;
};
