import { Link } from "react-router-dom";

const CategoryElement = ({name, key})=>{

    return(
        <Link to={`/products/${name}`} key={key} className="category-item">
            <p className="category-item__title">{name}</p>
        </Link>
    )
}

export default CategoryElement;