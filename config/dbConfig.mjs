import mongoose from "mongoose"; // Se importa este ODM (Object Data Modeling) para usar MongoDB con objetos y clases de JavaScript.
import dns from "node:dns/promises"; // Se mporta el módulo DNS nativo de Node.js

dns.setServers(["1.1.1.1", "8.8.8.8"]); // Se usan estos servidores DNS públicos para resolver dominios

export async function connectDB() {
    try {
        // Esta cadena de conexión dada en el PDF NO ME FUNCIONA - Solicitar revisión de la ruta
        //await mongoose.connect ('mongodb+srv://Grupo-02:grupo02@cursadanodejs.ls9ii.mongodb.net/Node-js');

        //Esta es la que me funciona (utilizada en el TP 2)
        await mongoose.connect ('mongodb+srv://grupo-02:grupo-02@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log ('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error ('Error al conectar a MongoDB', error);
        process.exit(1); // Si falla la conexión, se termina el proceso
    }
}

/*****
Este archivo es la puerta de entrada a la base de datos,
Se usa desde: app.mjs → connectDB()

Sin esto, no hay modelos, no hay consultas, no hay API
******/