import useFetch from '../../hooks/useFetch';
import '../../styles/orderList.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/apiConfig';
import type { Orden } from './orden';

const ListaOrdenes = () => {
  const { data: listOrdenes, loading, error } = useFetch<Orden[]>(`${BASE_URL}/orden`, []);

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
          <h2>Error al cargar las órdenes</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && listOrdenes.length === 0 && (
        <div className="text-center">
          <h2>No hay órdenes disponibles</h2>
        </div>
      )}

      {!loading && !error && listOrdenes.length > 0 && (
        <div className="table-responsive">
          <div className="table-title">
            <div className="row">
              <div className="col-xs-6">
                <h2 className="title-table">Lista de Órdenes</h2>
              </div>
              <div className="col-xs-6">
                <Link to="/crear-orden" className="btn btn-success">
                  <span className="material-symbols-outlined">add_circle</span>
                  <span>Añadir Orden</span>
                </Link>
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
                    <Link to={`/ver-orden/${orden.id}`} className="edit" data-toggle="modal">
                      <span className="material-symbols-outlined">visibility</span>
                    </Link>

                    <Link to={`/editar-orden/${orden.id}`} className="edit" data-toggle="modal">
                      <span className="material-symbols-outlined">edit</span>
                    </Link>

                    <Link to={`/eliminar-orden/${orden.id}`} className="delete" data-toggle="modal">
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

export default ListaOrdenes;
