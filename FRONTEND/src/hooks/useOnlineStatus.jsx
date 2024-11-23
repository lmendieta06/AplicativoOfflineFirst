import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Estado inicial basado en `navigator.onLine`

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine); // Actualiza el estado cuando cambia la conexión
  };

  useEffect(() => {
    // Escucha los cambios en el estado de conexión
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Limpia los eventos al desmontar
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return isOnline; // Retorna si el dispositivo está conectado
};

export default useOnlineStatus;
