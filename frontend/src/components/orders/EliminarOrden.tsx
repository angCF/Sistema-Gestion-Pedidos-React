import { useNavigate, useParams } from "react-router-dom";
import ApiClient from "../../utils/ApiCliente";
import { useEffect } from "react";
import Swal from "sweetalert2";
import ListaOrdenes from "./ListaOrdenes";

const EliminarOrden = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const eliminarOrden = async () => {
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
                    const response = await ApiClient.delete(`/orden/${id}`);
                    if (response.status === 200 || response.status === 204) {
                        Swal.fire("Eliminada", "Orden eliminada correctamente", "success").then(() => {
                            navigate("/ordenes");
                        });
                    } else {
                        Swal.fire("Error", "No se pudo eliminar la orden", "error");
                    }
                } catch (error: any) {
                    Swal.fire("Error", error.response?.data?.message || "Error desconocido", "error");
                }
            } else {
                navigate("/ordenes");
            }
        };
        eliminarOrden();
    }, [id, navigate]);
    return (
        <>
            <ListaOrdenes />
        </>
    );
};

export default EliminarOrden;