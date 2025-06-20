import { useNavigate, useParams } from "react-router-dom";
import ProductList from "./ListaProductos";
import ApiClient from "../../utils/ApiCliente";
import Swal from 'sweetalert2';
import { useEffect } from "react";

const EliminarProducto = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const confirmarEliminacion = async () => {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        try {
          const response = await ApiClient.delete(`/producto/${id}`);
          if (response.status === 200 || response.status === 204) {
            Swal.fire("Eliminado", "Producto eliminado correctamente", "success").then(() => {
              navigate("/productos");
            });
          } else {
            Swal.fire("Error", "No se pudo eliminar el producto", "error");
          }
        } catch (error: any) {
          Swal.fire("Error", error.response?.data?.message || "Error desconocido", "error");
        }
      } else {
        navigate("/productos");
      }
    };

    confirmarEliminacion();
  }, [id, navigate]);

  return (
    <>
      <ProductList />
    </>
  );
};

export default EliminarProducto;
