import { useLoaderData, Link, useParams } from "react-router-dom";


//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";
import ProductCart from "../component/productCart";

//import styles
import "../Style/Listing_View.css"





const CategoryView = ()=>{
    const { products } = useLoaderData()
    const { categoryName } = useParams();
    return(
        <>
        <Nav />
        <div className="listing">
            <div className="category">
                <h4>{categoryName}</h4>
            </div>
            <div className="products">
                {products?.data?.map((product, index)=> <ProductCart product={product} key={index}/>)}
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default CategoryView