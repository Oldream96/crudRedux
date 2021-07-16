import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    TRAER_PRODUCTOS,
    TRAER_PRODUCTOS_EXITO,
    TRAER_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';

export function crearNuevoProductoAcion(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            //llamado a la api
            await clienteAxios.post('/productos',producto);
            // actualizando state
            dispatch( agregarProductoExito(producto) );

            //agregando alerta
            Swal.fire(
                'correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError(true));
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Posiblemente el servidor esté disponible'
            })
        }
    }
}

const agregarProducto =()=>({
   type: AGREGAR_PRODUCTO 
});

const agregarProductoExito = producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

const agregarProductoError = estado =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
})



//PRODUCTOS
export function obtenerProductosAction(){
    return async (dispatch) =>{
        dispatch(obtenerProductos());
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(obtenerProductosExito(respuesta.data));
        } catch (error) {
            //error
            dispatch( obtenerProductosError(true));
        }
    }
}

const obtenerProductos = () =>({
    type: TRAER_PRODUCTOS,
    payload: true,
})

const obtenerProductosExito = productos =>({
    type: TRAER_PRODUCTOS_EXITO,
    payload: productos,
})

const obtenerProductosError = estado =>({
    type: TRAER_PRODUCTOS_ERROR,
    payload: estado,
})


//ELIMINAR PRODUCTOS

export function borrarProductoAcion(id){
    return async (dispatch) =>{
        dispatch(ObtenerProductoEliminar(id));
        try {
            await clienteAxios.delete('/productos/'+id)
            //si se elimina inomrmar
            Swal.fire('Eliminado','Producto Eliminado','success')
            dispatch(eliminarProductoExito());
        } catch (error) {
            dispatch(eliminarProductoError(true));
        }
    }

}


const ObtenerProductoEliminar = id =>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id,
})

const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO,

})
const eliminarProductoError = estado =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: estado,

})


export function obtenerProductoEditarAction(producto){
    return(dispatch) =>{
        dispatch( obtenerProductoEditar(producto));
    }
}

const obtenerProductoEditar = producto =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})


// Edita un Producto del state
export function editarProductoAction(producto){
    return async (dispatch) =>{
        dispatch( editarProducto() )
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
        } catch (error) {
            console.log(error);
            dispatch(editarProductoError(true));
        }
    }
}

const editarProducto = () =>({
    type: COMENZAR_EDICION_PRODUCTO,
})

const editarProductoExito = producto =>({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = estado =>({
    type: PRODUCTO_EDITADO_ERROR,
    payload: estado
})