import { useState } from "react";

const DescriptionComponent = ({description})=>{

    const [openDescription, setOpenDescription] = useState(true);

    return(
        <div className={`product-view-info-informations__desc ${openDescription ? 'product-view-info-informations__desc--open' : ''}`}>
            <button onClick={()=> setOpenDescription(!openDescription)}>Opis</button>
            <div className="desc">{description}</div>
        </div>
    )
}
export default DescriptionComponent