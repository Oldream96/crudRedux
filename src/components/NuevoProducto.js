import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarAlertaAcion, ocultarAlertaAction } from '../actions/alertaAcions';
import { crearNuevoProductoAcion } from '../actions/productoActions';

const NuevoProducto = ({history}) => {

    //state del component

    const [nombre,guardarNombre] = useState('');
    const [precio,guardarPrecio] = useState(0);
    

    //utilizar usedispatch y te crea un funcion
    const dispatch = useDispatch();

    //acceder al state del store

    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state => state.alerta.alerta);


    //mandar llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAcion(producto) );

    const SubmitNuevoProducto = e =>{
        e.preventDefault();
        //validar
        if( nombre.trim() === '' || precio <= 0 ){

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlertaAcion(alerta));

            return;
        }
        //si no hay errores

        dispatch(ocultarAlertaAction());


        //crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        history.push('/')

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Produto
                        </h2>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
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
                        { cargando ? <p> Cargando... </p>  : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;