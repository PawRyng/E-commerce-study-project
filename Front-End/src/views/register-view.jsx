import { Link, Form, useActionData, redirect } from "react-router-dom";
//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

//import styles
import "../Style/Register_View.css";





const RegisterView = ()=>{
    const data = useActionData();
    
    return(
        <>
        <Nav />
        <div className="register">
            <div className="register-left">
                <div className="register-left-inner">
                <h2>Rejestracja</h2>
                    <Form method="post">
                    <label htmlFor="username">Nazwa</label>
                    <input type="text" className={`${data?.message === "error-username" ? "input-error" : ""}`} name="username" id="username" placeholder="Nazwa"/>
                    {data?.message === "error-username" && <p>Pole nie może być puste!</p>}

                    <label htmlFor="password">Hasło</label>
                    <input type="password" className={`${data?.message === "error-password" ? "input-error" : ""}`} name="password" id="password" placeholder="Hasło" />
                    {data?.message === "error-password" && <p>Pole nie może być puste!</p>}
                    <input type="submit" value="Utwóż" />
                    {(data?.message === "Użytkownik o danej nazwie już istnieje" || data?.message === "Server Error") && <p>{data.message}</p>}
                    </Form>
                </div>
            </div>
            <div className="register-right">
                <div className="register-right-inner">
                    <h3>Masz konto?</h3>
                    <Link className="register-right-inner__button" to="/login">Zaloguj się</Link>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default RegisterView