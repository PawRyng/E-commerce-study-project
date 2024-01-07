import { useLoaderData, Link } from "react-router-dom";

//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";
//import styles
import '../Style/Product_View.css';
import { useState } from "react";

//import components
import InfoComponent from '../component/product-view/info';
import DescriptionComponent from '../component/product-view/description'
import ReturntPrivacyComponent from '../component/product-view/return-privacy'




const ProductView = ()=>{

    const { product } = useLoaderData();


    
    const {_id, name, description, price, imagePath} =  product.data
    

    
    return(
        <>
        <Nav />
        <div className="product-view">
            <div className="breadcramps"><Link to="/">Strona Główna</Link>/<span>{name}</span></div>
            <img src={`${import.meta.env.VITE_APP_USER_URL}${imagePath}`} alt={name} />
            <div className="product-view-info">
                <InfoComponent id={_id} name={name} price={price} />
                <div className="product-view-info-informations">
                    <DescriptionComponent description={description} />
                    <ReturntPrivacyComponent />

                    
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ProductView