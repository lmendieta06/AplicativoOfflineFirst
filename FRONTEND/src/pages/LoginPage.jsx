import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser} from "../useCases/authenticateUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const { user } = await loginUser(email, password);
      alert(`Bienvenido, ${user.name}`);
      navigate("/students"); // Redirigir a la página de estudiantes
    } catch (err) {
      setError("Credenciales inválidas. Inténtalo nuevamente." + err);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta?{" "}
        <button onClick={() => navigate("/register")}>Regístrate aquí</button>
      </p>
    </div>
  );
};

export default LoginPage;
