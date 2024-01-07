import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"

//import elements
import Nav from "../component/nav"
import ProductsCart from "../component/cart/products";
import EmptyCart from "../component/cart/no-product-in-cart";
import Summary from "../component/cart/summary";
import Footer from "../component/footer";
//import styles
import '../Style/Cart_View.css';




const CartView = ()=>{

    const { productsWithQuantities } = useLoaderData();
<<<<<<< HEAD
    
    const [cartItems, setCartItems] = useState(productsWithQuantities ? productsWithQuantities : []);
=======
    const [cartItems, setCartItems] = useState(productsWithQuantities);
>>>>>>> 75dd796427c024e1edae198031b9e73cbc0f9759
    const [summaryValue, setSummaryValue] = useState(0);

    useEffect(() => {
        const total = cartItems?.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setSummaryValue(total);
    }, [cartItems]);
    
    

    return(
        <>
        <Nav />
        <div className="cart">
            <div className={`cart-container ${cartItems?.length === 0 && "cart-container--empty"}`}>
                <h1>Koszyk</h1>
                {cartItems?.length > 0 ? (
                    <>
                        <ProductsCart cart={productsWithQuantities} cartItems={cartItems} setCartItems={setCartItems} />
                        <Summary summary={summaryValue} />
                    </>
                ) :
                (
                    <EmptyCart/>
                )}

            </div>
        </div>
        <Footer />
        </>
    )
}

export default CartView