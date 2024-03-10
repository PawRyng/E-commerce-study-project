import { Link, Form, useActionData, redirect } from "react-router-dom";
//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

//import styles
import "../Style/Admin_Panel.css";

import { categories } from '../data/settings.json'





const CommingSoon = ()=>{
    const data = useActionData();
    return(
        <>
        <Nav />
            <div className="admin-panel">
                <div className="admin-panel-container">
                    <h2>Coming Soon</h2>
                </div>

                </div>
        <Footer />
        </>
    )
}

export default CommingSoon