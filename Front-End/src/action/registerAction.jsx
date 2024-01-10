import axios from "axios";

export async function action({ request }){
    const data = await request.formData();
    if(data == undefined){
        return({message: "error"})
    }
    const username = data.get('username');
    const password = data.get('password');
    let message = "";
    if(username.length == 0){
        return({message: "error-username"});
    }
    if(password.length == 0){
      return({message: "error-password"});
    }
        await axios.post(`${import.meta.env.VITE_APP_USER_URL}/user/register`,{
            username, password
        }).then(res=>{
            message = "ok";
        }).catch(err=>{
            if(err.response.status === 409){
                message = "Użytkownik o danej nazwie już istnieje"
            }
            else{
                message = "Server Error"
            }
        });
        return({message})
}