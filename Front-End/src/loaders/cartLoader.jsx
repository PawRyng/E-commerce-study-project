import axios from "axios";
import { defer } from "react-router-dom";

export async function loader(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartQuery  = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/cart`,{
        params:{
            cart
        }
    })
    let productsWithQuantities = [];
    if(cartQuery.status === 201){
        return(productsWithQuantities)
    }
    productsWithQuantities = cartQuery.data.map(product => {
        const quantityObj = cart.find(item => item.id === product._id);
        const quantity = quantityObj ? parseInt(quantityObj.quantity) : 0;
      
        return { ...product, quantity };
      });

    return defer({ productsWithQuantities })
}