import React from 'react';

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Produto
                        </h2>
                        <form autoComplete="off">
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input className="form-control" type="text" placeholder="nombre Producto" name="nombre"
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input className="form-control" type="number" placeholder="Precio Producto" name="precio"
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