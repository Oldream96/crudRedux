import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

export function crearNuevoProductoAcion(producto){
    return () => {
        console.log(producto);
    }
}