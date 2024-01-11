import { useLoaderData, Link } from "react-router-dom";

//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

import CategoryElement from "../component/listing/categoryElement";
import ProductCart from "../component/productCart";

//import styles
import "../Style/Listing_View.css"

//import categories
import { categories } from '../data/settings.json'




const ListingView = ()=>{
    const {products} = useLoaderData();
    console.log(products)

    return(
        <>
        <Nav />
        <div className="listing">
            <div className="category">
                <h4>Kategorie:</h4>
                <div className="category-items">
                    {categories.map((item, index) => <CategoryElement name={item} key={index}/>)}
                </div>
            </div>
            <div className="products">
                {products?.data?.map((product, index)=> <ProductCart product={product} key={index}/>)}
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default ListingView