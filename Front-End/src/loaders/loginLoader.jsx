import { redirect } from "react-router-dom";

export async function loader(){
    const storedToken = localStorage.getItem('token');
    if(storedToken){
        const isAdmin = JSON.parse(atob(storedToken.split('.')[1])).isAdmin
        if(isAdmin){
            return redirect('/')
        }
    }
    return null
}