import '../image.css'
function Product({product,onAddToCart})
{
   
    console.log(product)
    return(
        
        <>
          <div className="mb-2  shadow rounded-3 p-3 gap-3 card">
                        <div className="container-img clickable-img">
                            <img src={product.images[0]} alt={product.title} className="product-img" />
                        </div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className="d-flex gap-3 align-items-center">
                            <span>⭐</span>
                            <div className="px-2 text-white bg-babyBlue bg-opacity-25 rounded-2 ">{product.rating}</div>
                            
                        </div>
                        {!product.stock?
                                  <div className="d-flex gap-3 align-items-center">
                                  <div className="px-2 text-white bg-danger  rounded-2 ">Not Avialable Now !</div>                      
                              </div>:""
                        }
                        <div className="d-flex justify-content-between">
                            <h3>${product.price}</h3>
                            <button disabled={!product.stock}
                            className="btn btn-outline-primary mb-3 addToCartBtn"
                            onClick={()=>onAddToCart(product)}
                            >Add To Cart</button>
                        </div>
                    </div>
        </>
    );
}
export default Product;