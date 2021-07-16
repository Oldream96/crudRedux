import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { borrarProductoAcion, obtenerProductoEditarAction } from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre,id,precio} = producto;

    const dispatch = useDispatch();

    const history = useHistory();

    //confirmar si desea eliminarlo

    const eliminarProducto  = id =>{

        //preguntar al usuario
        Swal.fire({
            icon:'question',
            title:'¿Seguro desea Eliminar?',
            text: '¿Seguro desea eliminar el producto?',
            showConfirmButton: true,
            confirmButtonText: 'Borrar',
            showCancelButton: true,     
            cancelButtonText: 'Cancelar',
        }).then( (result) =>{
            if (result.value) {
                //pasar al action
                dispatch(borrarProductoAcion(id))
            }
        } );


    }

    const redireccionarEditar = producto => {
        dispatch(obtenerProductoEditarAction(producto));
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td> {nombre} </td>
            <td> <span className="font-weight-bold" > $ {precio}</span> </td>
            <td className="acciones"> 
                <button type="button" onClick={()=>{ redireccionarEditar(producto) }} className="btn btn-primary mr-2">Editar</button>
                <button className="btn btn-danger" onClick={ () => eliminarProducto(id)} >Eliminar</button>
            </td>
        </tr>
    );
};

export default Producto;