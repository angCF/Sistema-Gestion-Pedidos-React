import '../../styles/productList.css';
import useFetch from '../../hooks/useFetch';
import type { Producto } from './producto';

const URL = 'http://localhost:8080/api/producto';
const ProductList = () => {
    const { data: listProducts, error: error, loading: loading } = useFetch<Producto[]>(URL);
    // const productos = [
    //     {
    //         id: 1,
    //         nombre: 'Gorra',
    //         descripcion: 'Gorra de alta calidad.',
    //         precioVenta: 20.00,
    //         stock: 100
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Pantalón',
    //         descripcion: 'Pantalón de mezclilla cómodo.',
    //         precioVenta: 90.00,
    //         stock: 88
    //     },
    //     {
    //         id: 4,
    //         nombre: 'Chaqueta',
    //         descripcion: 'Chaqueta de invierno.',
    //         precioVenta: 150.00,
    //         stock: 20
    //     },
    //     {
    //         id: 5,
    //         nombre: 'Medias',
    //         descripcion: 'Medias de algodón cómodas.',
    //         precioVenta: 5.00,
    //         stock: 100
    //     }
    // ];
    return (
        <>
            {/* <div className="text-center">
                <h2 className="section-heading">Lista de Productos</h2>
            </div> */}
            <div className="container">
                <div className="table-responsive">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-xs-6">
                                <h2 className='title-table'>Lista de Productos</h2>
                            </div>
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-success" data-toggle="modal">  <span className="material-symbols-outlined">add_circle</span>
                                    <span>Añadir Producto</span></a>
                                <a href="#" className="btn btn-danger" data-toggle="modal"><span className="material-symbols-outlined">delete</span>
                                    <span>Eliminar Producto</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <caption>Lista de Productos</caption>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
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
                                        <a href="#" className="view" data-toggle="modal"><span className="material-symbols-outlined">visibility</span></a>
                                        <a href="#" className="edit" data-toggle="modal"><span className="material-symbols-outlined">edit</span></a>
                                        <a href="#" className="delete" data-toggle="modal"><span className="material-symbols-outlined">delete</span></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default ProductList;