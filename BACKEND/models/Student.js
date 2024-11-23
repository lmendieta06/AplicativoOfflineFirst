import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grades: [{ subject: String, grade: Number }],
});

export default mongoose.model("Student", StudentSchema);
