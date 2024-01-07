import { useState } from "react"

const InfoComponent = ({name, id, price})=>{

    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = ()=>{
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity);
        } else {

          const newItem = { id: id, quantity };
          cart.push(newItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return(
        <>
        <div className="product-view-info__title">{name}</div>
        <div className="product-view-info__code">{id}</div>
        <div className="product-view-info__price">{price?.toFixed(2)} <span>zł</span></div>
        <div className="product-view-info__quantity">
            <p>Sztuk</p>
            <input type="number" min="1" defaultValue="1" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>
        <div className="product-view-info__submit">
            <button onClick={addToCartHandler}>Dodaj do koszyka</button>
        </div>
        </>
    )
}
export default InfoComponent