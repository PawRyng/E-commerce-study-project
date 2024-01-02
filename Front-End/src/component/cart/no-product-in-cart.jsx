import { Link } from "react-router-dom"

const EmptyCart = ()=>{


    return(
        <div className="empty-cart">
            <h2>
                Koszyk jest pusty😔
            </h2>
            <Link to="/">Strona Główna👈🏻</Link>
        </div>
        
    )
}

export default EmptyCart