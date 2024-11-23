import authRepository from "../../FRONTEND/src/repositories/authRepository";

export const postUser = async (name, email, password) => {
  if (!name || !email || !password) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const existingUser = await authRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("El correo ya está registrado.");
  }

  const newUser = await authRepository.createUser(name, email, password);
  if (!newUser) {
    throw new Error("No se pudo crear el usuario.");
  }

  return { id: newUser._id, name: newUser.name, email: newUser.email };
};

export const getUsers = async () => {
  const users = await authRepository.findAllUsers();
  if (!users || users.length === 0) {
    throw new Error("No se encontraron usuarios.");
  }

  return users;
};

export const updateUser = async (id, name, email, password) => {
  if (!id || (!name && !email && !password)) {
    throw new Error("ID del usuario y al menos un campo son obligatorios.");
  }

  const updatedUser = await authRepository.updateUserById(id, name, email, password);
  if (!updatedUser) {
    throw new Error("Usuario no encontrado o no se pudo actualizar.");
  }

  return { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email };
};

export const deleteUser = async (id) => {
  if (!id) {
    throw new Error("El ID del usuario es obligatorio.");
  }

  const deletedUser = await authRepository.deleteUserById(id);
  if (!deletedUser) {
    throw new Error("Usuario no encontrado o no se pudo eliminar.");
  }

  return { id: deletedUser._id, name: deletedUser.name, email: deletedUser.email };
};

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