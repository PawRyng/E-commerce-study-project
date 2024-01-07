import { Link } from "react-router-dom";
const ProductCart = ({product, key}) =>{
    const {_id, name, price, imagePath} = product;

    
    const addToCartHandler = ()=>{
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === _id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {

          const newItem = { id: _id, quantity: 1 };
          cart.push(newItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return(
        <div key={key} className="product-cart" data-id={_id}>
            <Link to={`/product/${_id}`}>
                <img src={`${import.meta.env.VITE_APP_USER_URL}${imagePath}`} alt={name} />
                <p className="product-cart__name">{name}</p>
                <p className="product-cart__price">{price.toFixed(2)} <span>zł</span></p>
            </Link>
            <button className="product-cart__add-to-cart" onClick={addToCartHandler}>Dodaj do koszyka</button>
        </div>
    )
}
export default ProductCart