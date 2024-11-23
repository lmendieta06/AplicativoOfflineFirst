import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { syncDataWithServer } from "../services/syncService"; // Servicio para sincronización
import useOnlineStatus from "./useOnlineStatus"; // Hook para verificar el estado de conexión

const useSync = () => {
  const isOnline = useOnlineStatus(); // Verifica si el usuario está conectado
  const queryClient = useQueryClient(); // React Query para invalidar y sincronizar datos

  // Mutación para sincronizar datos con el servidor
  const mutation = useMutation(syncDataWithServer, {
    onSuccess: () => {
      console.log("Datos sincronizados exitosamente con el servidor.");
      // Invalida caché local para actualizar datos remotos
      queryClient.invalidateQueries("localData");
    },
    onError: (error) => {
      console.error("Error al sincronizar datos:", error);
    },
  });

  useEffect(() => {
    if (isOnline) {
      console.log("Conexión establecida, iniciando sincronización...");
      mutation.mutate(); // Sincroniza los datos
    }
  }, [isOnline, mutation]);

  return { isSyncing: mutation.isLoading };
};

export default useSync;
