import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {

    const history = useHistory();

    //nuevo state de producto
    const [ producto,guardarProducto ] = useState({
        nombre: '',
        precio: 0
    });

    const dispatch = useDispatch();

    const productoEditar = useSelector( state => state.productos.productoEditar);

    useEffect( () =>{
        guardarProducto(productoEditar);
    },[productoEditar] )

    // cambiar valores del form

    const onChangeFormulario = e =>{
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value,
        })
    }


    const { nombre, precio } = producto;


    const SubmitEditarProducto = e =>{
        e.preventDefault();

        dispatch(editarProductoAction(producto));

        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Produto
                        </h2>
                        <form autoComplete="off" onSubmit={ SubmitEditarProducto }>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input className="form-control" type="text" 
                                    placeholder="nombre Producto" name="nombre" value={nombre} onChange={onChangeFormulario}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input className="form-control" type="number" 
                                    placeholder="Precio Producto" name="precio" value={precio} onChange={onChangeFormulario}
                                ></input>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProducto;