import axios from "axios";

export async function action({ request }){
    const data = await request.formData();
    if(data == undefined){
        return({message: "error"})
    }
    const username = data.get('username');
    const password = data.get('password');

    if(username.length == 0){
        return({message: "error-username"});
    }
    if(password.length == 0){
      return({message: "error-password"});
    }

    let message, status;
    await axios.post(`${import.meta.env.VITE_APP_USER_URL}/user/login`,{
        username, password
    }).then(res=>{
        localStorage.setItem('token', res.data.token);
        window.location = "/"
    }).catch(err=>{
        if(err.response.status === 401){
            status = 401;
            message = err.response.data.message
        }
        else{
            status = 500;
            message = "Server Error"
        }
    });
        return({status, message});
}