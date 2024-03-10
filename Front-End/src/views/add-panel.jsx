import { Link, Form, useActionData, redirect } from "react-router-dom";
//import elements
import Nav from "../component/nav"
import Footer from "../component/footer";

//import styles
import "../Style/Admin_Panel.css";

import { categories } from '../data/settings.json'





const AddProductPanel = ()=>{
    const data = useActionData();
    return(
        <>
        <Nav />
            <div className="admin-panel">
                <div className="admin-panel-container">
                    <h2>Dodaj Produkt</h2>
                    <Form method="post" className="admin-panel-add-product">
                        {data?.message && <h3>{data.message}</h3>}
                        <label htmlFor="name">Nazwa*</label>
                        <input type="text" className={`${data?.message === "error-name" ? "input-error" : ""}`} name="name" id="name" />
                        {data?.message === "error-name" && <p>Pole nie może być puste!</p>}
                        <label htmlFor="desc">Opis</label>
                        <textarea name="description" id="desc" cols="30" rows="10"></textarea>
                        <label htmlFor="category">Kategoria*</label>
                        <select name="mainCategory" id="category">
                            {categories?.map(category => <option value={category}>{category}</option>)}
                        </select>
                        {data?.message === "error-category" && <p>Pole nie może być puste!</p>}
                        <label htmlFor="price">Cena*</label>
                        <div className="admin-panel-add-product__price">
                            <input type="number" className={`${data?.message === "error-price" ? "input-error" : ""}`} name="price" id="price" /><span> zł</span>
                            {data?.message === "error-price" && <p>Pole nie może być puste!</p>}
                        </div>
                        <label htmlFor="bestseller">Bestseller:</label>
                        <input type="checkbox" name="bestseller" id="bestseller" />
                        <label htmlFor="image">Zdjęcie</label>
                        <input type="file" name="image" id="image" disabled/>
                        <input type="submit" value="Dodaj" />
                    </Form>
                </div>

                </div>
        <Footer />
        </>
    )
}

export default AddProductPanel