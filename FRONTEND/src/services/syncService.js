import axios from "axios";
import localforage from "localforage"; // Para manejar almacenamiento local de forma asíncrona

const syncService = {
  // Sincronizar datos locales con el servidor
  syncDataWithServer: async () => {
    try {
      // Recuperar datos no sincronizados del almacenamiento local
      const unsyncedData = await localforage.getItem("unsyncedData");

      if (unsyncedData && unsyncedData.length > 0) {
        console.log("Sincronizando datos no sincronizados con el servidor...");

        // Enviar datos al servidor remoto
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/sync`, {
          data: unsyncedData,
        });

        if (response.status === 200) {
          console.log("Datos sincronizados exitosamente con el servidor.");

          // Limpia los datos sincronizados del almacenamiento local
          await localforage.setItem("unsyncedData", []);
        }
      } else {
        console.log("No hay datos pendientes de sincronización.");
      }
    } catch (error) {
      console.error("Error al sincronizar datos con el servidor:", error);
      throw new Error("La sincronización falló.");
    }
  },

  // Guardar datos localmente cuando no hay conexión
  saveOfflineData: async (data) => {
    try {
      const currentData = (await localforage.getItem("unsyncedData")) || [];
      const updatedData = [...currentData, data];

      // Guardar el nuevo conjunto de datos no sincronizados
      await localforage.setItem("unsyncedData", updatedData);

      console.log("Datos guardados localmente para sincronización futura.");
    } catch (error) {
      console.error("Error al guardar datos localmente:", error);
      throw new Error("Error al guardar datos localmente.");
    }
  },

  // Obtener datos sincronizados desde el servidor
  fetchDataFromServer: async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/data`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error);
      throw new Error("No se pudo recuperar datos del servidor.");
    }
  },
};

export default syncService;