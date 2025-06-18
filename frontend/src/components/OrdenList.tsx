import '../styles/orderList.css';

const OrdenList = () => {
    const ordenes = [
        {
            id: 1,
            nombre: 'Gorra',
            descripcion: 'Gorra de alta calidad.',
            precio: 20.00,
            cantidad: 100
        },
        {
            id: 2,
            nombre: 'Pantalón',
            descripcion: 'Pantalón de mezclilla cómodo.',
            precio: 90.00,
            cantidad: 88
        },
        {
            id: 4,
            nombre: 'Chaqueta',
            descripcion: 'Chaqueta de invierno.',
            precio: 150.00,
            cantidad: 20
        },
        {
            id: 5,
            nombre: 'Medias',
            descripcion: 'Medias de algodón cómodas.',
            precio: 5.00,
            cantidad: 100
        }
    ];
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
							<th>Nombre</th>
							<th>Descripcion</th>
							<th>Precio</th>
							<th>Disponible</th>
							<th>Acciones</th>
						</tr>
					</thead>
                    <tbody>
                        {ordenes.map(orden => (
                        <tr>
                            <td>{orden.nombre}</td>
                            <td>{orden.descripcion}</td>
                            <td>{orden.precio}</td>
                            <td>{orden.cantidad}</td>
                            <td>
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