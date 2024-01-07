import axios from "axios";
import { defer } from "react-router-dom";

export async function loader({ params }){
    let product = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/product/${params.productID}`)
    return defer({ product })
}