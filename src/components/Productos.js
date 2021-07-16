import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {

    //dispatch
    const dispatch = useDispatch();

    //acceder al store

    const productos = useSelector( state => state.productos.productos);
    const error = useSelector( state => state.productos.error );
    const cargando = useSelector( state => state.productos.loading );

    useEffect( ()=>{
        //consultar api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        // eslint-disable-next-line
    },[])


    return (
        <Fragment>
            <h2 className="text-center my-5">Lista de Produtos</h2>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
            { cargando ? <p className="text-center font-weight-bold"> Cargando...</p> : null }
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { (productos.map( producto => ( 
                    <Producto 
                        key={producto.id} 
                        producto={producto}
                    />
                     ) )) }
                </tbody>
            </table>
        </Fragment>
    );
};

export default Productos;