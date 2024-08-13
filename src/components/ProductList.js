import Product from'../components/Product'
import Error from '../components/Error'
import Tittle from '../components/tittle';
function ProductList({ products,error,onAddToCart}) {

    if (error) {
        return <Error/>
    }
    
    return (
        <>
            <Tittle/>
            <div className="container ">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 " key={product.id}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ProductList;
