import mongoose from "mongoose";

export const connectionToDB = () =>
  mongoose





  .then(() => console.log("BBDD Conectada exitosamente"))
  .catch(() => console.log("Hubo un error en la conexión con la BBDD"));