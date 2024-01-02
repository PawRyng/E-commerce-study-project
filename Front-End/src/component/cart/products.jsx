import Product from "./product";

const ProductsCart = ({cart, cartItems, setCartItems})=>{

    const removeProduct = (productId) => {
        const updatedCart = cartItems.filter((product) => product._id !== productId);
        const cartItemsLocalStorage = JSON.parse(localStorage.getItem('cart')).filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cartItemsLocalStorage));
        setCartItems(updatedCart);
      };

    return(
        <>
        <table>
            <tbody>
                {    cartItems.map((product) => (
                    <Product key={product._id} product={product} removeHandler={removeProduct} />
                ))}

            </tbody>
        </table>
        </>
        
    )
}

export default ProductsCart