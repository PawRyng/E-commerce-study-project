import axios from "axios";
import { defer } from "react-router-dom";

export async function loader(){
    
    let bestsellers = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/product`,{
        params:{
            bestseller: 1,
            limit: import.meta.env.VITE_APP_MAIN_PAGE_LIMIT_VIEW
        }
    })

    return defer({ bestsellers })
}