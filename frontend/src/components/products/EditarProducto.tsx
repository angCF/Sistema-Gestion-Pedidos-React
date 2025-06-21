import './styles/crearProducto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiClient from '../../utils/ApiCliente';
import Swal from 'sweetalert2';

const EditarProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioVenta, setPrecioVenta] = useState(0);
  const [stock, setStock] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await ApiClient.get(`/producto/${id}`);
        const producto = response.data;
        setNombre(producto.nombre);
        setDescripcion(producto.descripcion);
        setPrecioVenta(producto.precioVenta);
        setStock(producto.stock);
      } catch (error) {
        Swal.fire("Error", "No se pudo cargar el producto", "error");
        navigate('/productos');
      }
    };
    fetchProducto();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productoActualizado = { nombre, descripcion, precioVenta, stock };

    try {
      const response = await ApiClient.put(`/producto/${id}`, productoActualizado);
      if (response.status === 200 || response.status === 204) {
        Swal.fire("Éxito", "Producto actualizado correctamente", "success").then(() => {
          navigate("/productos");
        });
      } else {
        Swal.fire("Error", "No se pudo actualizar el producto", "error");
      }
    } catch (error: any) {
      Swal.fire("Error", error.response?.data?.message || "Error desconocido", "error");
    }
  };

  const handleCancel = () => {
    navigate('/productos');
  };

  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-content-custom">
          <div className="modal-header">
            <h5 className="modal-title">Editar Producto</h5>
            <button type="button" className="btn-close" onClick={handleCancel}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" rows={3} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Precio de venta</label>
                <input type="number" className="form-control" value={precioVenta} onChange={(e) => setPrecioVenta(parseFloat(e.target.value))} />
              </div>
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="number" className="form-control" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarProducto;
