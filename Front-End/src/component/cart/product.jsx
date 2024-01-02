

const Product = ({product, removeHandler})=>{
    const {_id, name, price, quantity, imagePath} = product;

    return(
        <tr className="product">
            <td className="product__image"><img src={`${import.meta.env.VITE_APP_USER_URL}${imagePath}`} alt={name} /></td>
            <td className="product__name">{name}</td>
            <td className="product__quantity">{quantity}<span>szt.</span></td>
            <td className="product-summary">
                <div className="product-summary__value">
                    <p>Wartość</p>
                    <p>{(parseInt(quantity) * parseFloat(price)).toFixed(2)}<span>zł</span></p>
                </div>
                <div className="product-summary__per-item">
                    <p>Cena za szt.</p>
                    <p>{price}<span>zł</span></p>
                </div>
                </td>
            <td className="product__action"><button onClick={() => removeHandler(_id)}>usuń X</button></td>
        </tr>
    )
}

export default Product