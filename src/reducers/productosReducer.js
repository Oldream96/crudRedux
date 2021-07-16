import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    TRAER_PRODUCTOS,
    TRAER_PRODUCTOS_ERROR,
    TRAER_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types'
//cada reducer tiene su propio state
const initialState ={
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar:null,
}

// eslint-disable-next-line
export default  function(state = initialState,action){
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: true,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: [...state.productos, action.payload],
            }
        case TRAER_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case TRAER_PRODUCTOS:
            return{
                ...state,
                loading: action.payload,
            }
        case TRAER_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: action.payload,
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoEliminar: action.payload,
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoEliminar ),
                productoEliminar: null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoEditar: action.payload,
            }
        case PRODUCTO_EDITADO_EXITO:
            return{
                ...state,
                productoEditar: null,
                loading: false,
                productos: state.productos.map( producto =>
                    producto.id === action.payload.id ? ( producto = action.payload ) : producto
                )
            }
        default:
            return state;
    }
}