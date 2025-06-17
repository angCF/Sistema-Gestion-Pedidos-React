import logo from '/logo.png'
import '../styles/productList.css';

const ProductList = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Gorra',
            descripcion: 'Gorra de alta calidad.',
            image: logo,
        },
        {
            id: 2,
            nombre: 'Pantalón',
            descripcion: 'Pantalón de mezclilla cómodo.',
            image: logo,
        },
        {
            id: 4,
            nombre: 'Chaqueta',
            descripcion: 'Chaqueta de invierno.',
            image: logo,
        },
        {
            id: 5,
            nombre: 'Medias',
            descripcion: 'Medias de algodón cómodas.',
            image: logo,
        }
    ];
    return (
        <>
            <div className="text-center">
                <h2 className="section-heading">Lista de Productos</h2>
            </div>
            <div className="container">
                <div className="row">
                    {productos.map(producto => (
                        <div className="col-md-4" key={producto.id}>
                            <div className="card mb-4">
                                <img src="https://apollobattery.com.au/wp-content/uploads/2022/08/default-product-image.png" className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <a href="#" className="btn btn-primary">Ver Detalles</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;