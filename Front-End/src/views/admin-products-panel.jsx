import { Link, useLoaderData } from "react-router-dom";
//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

//import styles
// import "../Style/Admin_Panel.css";

// compopnenets
import EmprtProducts from "../component/admin/emptyProducts"
import AdminProduct from "../component/admin/product"
import { useState } from "react";

import "../Style/Admin_Panel.css";





const ProductsPanel = ()=>{
    const {products} = useLoaderData();
    const [productsState, setProductsState] = useState(products?.data);

    return(
        <>
        <Nav />
            <div className="admin-panel">
                <div className="admin-panel-container">
                    <h2>Zarządzaj Produktami</h2>
                    <Link className="admin-panel-container__add-product" to={"/admin/products/add-product"}>Dodaj Produkt</Link>
                    <ul className="products-container">
                        {productsState.length === 0 ? <EmprtProducts/> : productsState.map((product, index) =><AdminProduct products={productsState} setProducts={setProductsState} product={product} index={index}/>)}
                    </ul>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default ProductsPanel