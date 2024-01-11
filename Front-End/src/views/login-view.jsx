import { Link, Form, useActionData } from "react-router-dom";
//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

//import styles
import "../Style/Register_View.css";





const LoginView = ()=>{
    const data = useActionData();

    return(
        <>
        <Nav />
        <div className="register">
            <div className="register-left">
                <div className="register-left-inner">
                <h2>Logowanie</h2>
                    <Form method="post">
                        <label htmlFor="username">Nazwa</label>
                        <input type="text" className={`${data?.message === "error-username" ? "input-error" : ""}`} name="username" id="username" placeholder="Nazwa"/>
                        {data?.message === "error-username" && <p>Pole nie może być puste!</p>}

                        <label htmlFor="password">Hasło</label>
                        <input type="password" className={`${data?.message === "error-password" ? "input-error" : ""}`} name="password" id="password" placeholder="Hasło" />
                        {data?.message === "error-password" && <p>Pole nie może być puste!</p>}
                        <input type="submit" value="Zaloguj" />
                        {(data?.status === 500 || data?.status === 401) && <p>{data.message}</p>}
                    </Form>
                </div>
            </div>
            <div className="register-right">
                <div className="register-right-inner">
                    <h3>Nie masz konta?</h3>
                    <Link className="register-right-inner__button" to="/register">Zarejestruj się</Link>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default LoginView