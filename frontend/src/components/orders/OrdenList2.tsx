import useFetch from '../../hooks/useFetch';
import '../../styles/orderList.css';
import { BASE_URL } from '../../utils/apiConfig';
import type { Orden } from './orden';

const OrdenList2 = () => {
    const { data: listOrdenes, loading, error } = useFetch<Orden[]>(`${BASE_URL}/orden`, []);

    return (
      <div className="container">

        {/* Loader */}
        {loading && (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center text-danger">
            <h2>Error al cargar las órdenes</h2>
            <p>{error}</p>
          </div>
        )}

        {/* Sin órdenes */}
        {!loading && !error && listOrdenes.length === 0 && (
          <div className="text-center">
            <h2>No hay órdenes disponibles</h2>
          </div>
        )}

        {/* Tabla */}
        {!loading && !error && listOrdenes.length > 0 && (
          <div className="table-responsive">
            <div className="table-title">
              <div className="row">
                <div className="col-xs-6">
                  <h2 className="title-table">Lista de Órdenes</h2>
                </div>
                <div className="col-xs-6">
                  <a href="#" className="btn btn-success" data-toggle="modal">
                    <span className="material-symbols-outlined">add_circle</span>
                    <span>Añadir Orden</span>
                  </a>
                  <a href="#" className="btn btn-danger" data-toggle="modal">
                    <span className="material-symbols-outlined">delete</span>
                    <span>Eliminar Orden</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <caption>Lista de Órdenes</caption>
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
                {listOrdenes.map((orden) => (
                  <tr key={orden.id}>
                    <td>{orden.numDocumentoComprador}</td>
                    <td>{orden.nombreComprador}</td>
                    <td>{orden.precioCompra}</td>
                    <td>{new Date(orden.fechaCompra).toLocaleDateString()}</td>
                    <td>
                      <a href="#" className="view" data-toggle="modal">
                        <span className="material-symbols-outlined">visibility</span>
                      </a>
                      <a href="#" className="edit" data-toggle="modal">
                        <span className="material-symbols-outlined">edit</span>
                      </a>
                      <a href="#" className="delete" data-toggle="modal">
                        <span className="material-symbols-outlined">delete</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    );

};

export default OrdenList2;
