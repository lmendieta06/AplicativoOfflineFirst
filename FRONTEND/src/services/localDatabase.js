import Dexie from "dexie";

const db = new Dexie("GradeUpDB");
db.version(1).stores({
  students: "++id, name, age, grades",
  pendingSync: "++id, type, data",
});

export default db;
