// Se importa el repositorio - no se comunica directo a la DB
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

// Todas las funciones son async porque dependen de las operaciones en la DB

 // Obtiene el Id del Controller, llama al repo y devuelve el resultado
export async function obtenerSuperheroePorId (id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

// Devuelve la colección completa
export async function obtenerTodosLosSuperheroes () {
    return await SuperHeroRepository.obtenerTodos();
}

// Busca por atributos variable, permite consultas flexibles
export async function buscarSuperheroePorAtributo (atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

// Engloba la regla del negocio: filtrar por edad
export async function obtenerSuperheroesMayoresDe30 () {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

/***** A PARTIR DE AQUÍ SE AGREGAN LOS METODOS POST, PUT Y DELETE
SOLICITADOS PARA EL TP1 DEL SPRINT 3 *****/

// Crea o persistir un nuevo recurso en la DB
export async function crearSuperheroe (datos) {
    return await SuperHeroRepository.crear(datos);
} 

// Actualizar datos completos de un recurso de la DB
export async function actualizarSuperheroe (id, datos) {
    return await SuperHeroRepository.actualizar(id, datos);
}

// Actualizar parcialmente los datos de un recurso en la DB
export async function actualizarParcialSuperheroe (id, datos) {
    return await SuperHeroRepository.actualizarParcial(id, datos);
}

// Eliminar un recurso de la DB por atributo (es este caso "nombre")
export async function eliminarSuperheroePorNombre (nombre) {
    return await SuperHeroRepository.eliminarPorNombre(nombre);
}

// Eliminar un recurso de la DB por atributo "Id"
export async function eliminarSuperheroePorId (id) {
    return await SuperHeroRepository.eliminarPorId(id);
}

/*****
Este archivo contiene la lógica del negocio, no se relaciona con el HTTP ni con Express.
Recibe la solicitud y pide los datos al repositorio
*****/