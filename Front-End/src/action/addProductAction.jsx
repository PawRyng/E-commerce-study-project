import axios from "axios";

export async function action({ request }){
    const data = await request.formData();
    let message;
    if(data == undefined){
        return({message: "error"})
    }

    if(data.get('name').length == 0){
      return({message: "error-name"});
    }
    if(data.get('mainCategory').length == 0){
      return({message: "error-category"});
    }
    if(data.get('price').length == 0){
      return({message: "error-price"});
    }

    const formData = new FormData();
    formData.append('name', data.get('name'));
    formData.append('description', data.get('description'));
    formData.append('mainCategory', data.get('mainCategory'));
    formData.append('bestseller', data.get('bestseller'));
    formData.append('price', data.get('price'));
    formData.append('image', data.get('image'));
    await axios.post(`${import.meta.env.VITE_APP_USER_URL}/product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Barer ${localStorage.getItem('token')}`
        },
      }).then(res=>{
        message = "Produkt został utwożony";
      }).catch(err=>{
        if(err.response.status === 400){
          message = "Ten produkt już istnieje!"
        }
        else{
          message = "Serwer error"
        }
      });

    return({message});
}