import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearNuevoProductoAcion } from '../actions/productoActions';

const NuevoProducto = () => {

    //state del component

    const [nombre,guardarNombre] = useState('');
    const [precio,guardarPrecio] = useState(0);
    

    //utilizar usedispatch y te crea un funcion
    const dispatch = useDispatch();


    //mandar llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAcion(producto) );

    const SubmitNuevoProducto = e =>{
        e.preventDefault();
        //validar
        if( nombre.trim() === '' || precio <= 0 ){
            return;
        }
        //si no hay errores

        //crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Produto
                        </h2>
                        <form autoComplete="off" onSubmit={SubmitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input className="form-control" type="text" placeholder="nombre Producto" name="nombre" value={nombre} onChange={e =>guardarNombre(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input className="form-control" type="number" placeholder="Precio Producto" name="precio" value={precio} onChange={e =>guardarPrecio(Number(e.target.value))}
                                ></input>
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;