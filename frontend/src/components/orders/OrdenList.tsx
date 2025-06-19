import Swal from 'sweetalert2';
import useFetch from '../../hooks/useFetch';
import '../../styles/orderList.css';
import type { Orden } from './orden';

const URL = 'http://localhost:8080/api/qqee';

const OrdenList = () => {
    const { data: listOrdenes, error: error, loading: loading } = useFetch<Orden[]>(URL);
    if (loading) {
        return <div className="text-center"><h2>Cargando...</h2></div>;
    }
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha ocurrido un error al consultar las ordenes",
            footer: "Valida que el servicio de ordenes se encuentre activo"
        });
    }
    if (listOrdenes.length === 0 && !error) {
        const contenedor = document.querySelector('.container');
        if (contenedor && document.getElementsByClassName('text-center').length === 0) {
            const div = document.createElement('div');
            div.className = 'text-center';
            const mensaje = "No hay ordenes disponibles";
            div.innerHTML = `<h2>${mensaje}</h2>`;
            contenedor.appendChild(div);
        }
    }
    // const ordenes = [
    //     {
    //         id: 1,
    //         nombre: 'Gorra',
    //         descripcion: 'Gorra de alta calidad.',
    //         precio: 20.00,
    //         cantidad: 100
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Pantalón',
    //         descripcion: 'Pantalón de mezclilla cómodo.',
    //         precio: 90.00,
    //         cantidad: 88
    //     },
    //     {
    //         id: 4,
    //         nombre: 'Chaqueta',
    //         descripcion: 'Chaqueta de invierno.',
    //         precio: 150.00,
    //         cantidad: 20
    //     },
    //     {
    //         id: 5,
    //         nombre: 'Medias',
    //         descripcion: 'Medias de algodón cómodas.',
    //         precio: 5.00,
    //         cantidad: 100
    //     }
    // ];
    return (
        <>
            {/* <div className="text-center">
                <h2 className="section-heading">Lista de Productos</h2>
            </div> */}
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            <div className="container">
                <div className="table-responsive">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-xs-6">
                                <h2 className='title-table'>Lista de Ordenes</h2>
                            </div>
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-success" data-toggle="modal">  <span className="material-symbols-outlined">add_circle</span>
                                    <span>Añadir Orden</span></a>
                                <a href="#" className="btn btn-danger" data-toggle="modal"><span className="material-symbols-outlined">delete</span>
                                    <span>Eliminar Orden</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <caption>Lista de Ordenes</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre Comprador</th>
                                <th>Precio Compra</th>
                                <th>Fecha Compra</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrdenes.map(orden => (
                                <tr key={orden.id}>
                                    <td>{orden.numDocumentoComprador}</td>
                                    <td>{orden.nombreComprador}</td>
                                    <td>{orden.precioCompra}</td>
                                    <td>{orden.fechaCompra}</td>
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
            </div>
        </>
    );
};

export default OrdenList;