import { useState } from "react";
import { registerUser } from "../useCases/authenticateUser";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);
      const user = await registerUser(name, email, password);
      setSuccess(`Usuario registrado con éxito: ${user.name}`);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Error al registrar usuario. Verifica los datos o inténtalo nuevamente." + err);
    }
  };

  return (
    <div>
      <h1>Registrar Usuario</h1>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
