import User from "../models/User.js";
import bcrypt from "bcryptjs";

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const findAllUsers = async () => {
  return await User.find().select("-password");
};

const createUser = async (name, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ name, email, password: hashedPassword });
  return await newUser.save();
};

const updateUserById = async (id, name, email, password) => {
  const updateData = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(password, salt);
  }

  return await User.findByIdAndUpdate(id, updateData, { new: true }).select("-password");
};

const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.VITE_APP_API_URL}/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Error en la solicitud de inicio de sesión.");
  }
};


export default {
  findUserByEmail,
  findAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
  login, 
};
