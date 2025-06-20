import '../../styles/productList.css';
import useFetch from '../../hooks/useFetch';
import type { Producto } from './producto';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/apiConfig';

const ListaProductos = () => {
    const { data: listProducts, error, loading } = useFetch<Producto[]>(`${BASE_URL}/producto`, []);

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            )}

            {!loading && error && (
                <div className="text-center text-danger">
                    <h2>Error al cargar los productos</h2>
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && listProducts.length === 0 && (
                <div className="text-center">
                    <h2>No hay productos disponibles</h2>
                </div>
            )}

            {!loading && !error && listProducts.length > 0 && (
                <div className="table-responsive">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-xs-6">
                                <h2 className="title-table">Lista de Productos</h2>
                            </div>
                            <div className="col-xs-6">
                                <Link to="/crear-producto" className="btn btn-success">
                                    <span className="material-symbols-outlined">add_circle</span>
                                    <span>Añadir Producto</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <caption>Lista de Productos</caption>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio de venta</th>
                                <th>Stock</th>
                                <th id="table-action">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts.map(producto => (
                                <tr key={producto.id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precioVenta}</td>
                                    <td>{producto.stock}</td>
                                    <td>
                                        <Link to={`/editar-producto/${producto.id}`} className="edit" data-toggle="modal">
                                            <span className="material-symbols-outlined">edit</span>
                                        </Link>

                                        <Link to={`/eliminar-producto/${producto.id}`} className="delete" data-toggle="modal">
                                            <span className="material-symbols-outlined">delete</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default ListaProductos;