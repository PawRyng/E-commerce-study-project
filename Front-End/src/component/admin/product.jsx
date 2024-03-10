import { action as AdminPanelProductsAction } from "../../action/AdminPanelProductsAction.js"

const AdminProduct = ({products, setProducts, product, index})=>{
    return(
        <li className="products-container-product" key={index}>
            <div className="products-container-product__name">
                {product.name}
            </div>
            <div className="products-container-product__actions">
                <button onClick={()=> AdminPanelProductsAction(products,setProducts, product._id)}>Usuń</button>
            </div>
        </li>
    )
}

export default AdminProduct;