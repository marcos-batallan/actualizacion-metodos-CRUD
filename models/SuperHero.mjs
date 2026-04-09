// Aquí la importación de mongoose permite crear el esquema, definir el modelos y realizar las validaciones de datos
import mongoose from "mongoose";

// Cada Superhéroe almacenado en la DB respetará esta estructura
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true }, //dato bligatorio - texto
    nombreReal: { type: String, required: true }, //también obligatorio - texto
    edad: { type: Number, min: 0 }, //valor numérico positivo
    planetaOrigen: { type: String, default: 'desconocido'}, //si no se envía el dato = desconocido
    debilidad: String, //texto
    poderes: [String], //lista de texto
    aliados: [String], //array de nombres
    enemigos: [String], //también array de nombres
    creator: String, //autor del personaje
    createdAt: { type: Date, default: Date.now } //fecha de cración
});

// Esto convierte el schema en un Modelo, que es la interfaz para los métodos CRUD
// SuperHero: Nombre interno del modelo
// superheroSchema: la estructura definida antes
// Grupo-02: Nombre exacto de la colección en la base
const SuperHero = mongoose.model ('SuperHero', superheroSchema, 'Grupo-02');

// Se exporta el modelo para usarlo en el Repository = consultas a la DB
export default SuperHero;

/****** 
Este archivo es la definición de la estructura de datos

El flujo sería: Controller → Service → Repository → Modelo → MongoDB

El Repository importa este modelo para hacer consultas. Aquí se define la estructura,
validaciones y reglas de los datos antes de guardarlos en la base.

*****/