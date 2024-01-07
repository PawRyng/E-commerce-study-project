import axios from "axios";
import { defer } from "react-router-dom";

export async function loader({params}){
    let products = [];
    if(params.categoryName){
        products = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/product/filters`,{
            params:{
                main: params.categoryName
            }
        })
    }
    else{
        products = [];
    }

    return defer({ products })
}