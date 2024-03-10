import { redirect } from "react-router-dom";
import axios from "axios";

export async function loader(){
    const storedToken = localStorage.getItem('token');
    if(storedToken){
        const isAdmin = JSON.parse(atob(storedToken.split('.')[1])).isAdmin
        if(!isAdmin){
            return redirect('/')
        }
    }
    else{
        return redirect('/')
    }

    let products = await axios.get(`${import.meta.env.VITE_APP_USER_URL}/product/`)

    return { products }

}