import axios from "axios";
import { defer } from "react-router-dom";

export async function loader(){
    
    let products = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/product/`,{
        params:{
            limit: import.meta.env.VITE_APP_CATEGORY_PAGE_LIMIT_VIEW
        }
    })

    return defer({ products })
}