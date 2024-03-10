import axios from "axios";

export async function action(products, setProducts, id){
    const accessToken = localStorage.getItem('token')
    axios.delete(`${import.meta.env.VITE_APP_USER_URL}/product/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
    }).then(data=>{
        console.log(data)
        if(data.status === 204){
            const filtredProducts = products.filter(product => product._id !== id)
            setProducts(filtredProducts)
        }
    }).catch(err=>{
        if(err){
            if(err.response.status === 500){
                console.error(err.response.data.message)
            }
            
            if(err.response.status === 404){
                console.error(err.response.data.message)
            }
        }
    })
}