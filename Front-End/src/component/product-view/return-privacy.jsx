import { useState } from "react";
//import return privacy
import { privacyPolicy } from "../../data/settings.json"
const ReturntPrivacyComponent = ()=>{
    const [openReturn, setOpenReturn] = useState(false);

    return(
        <div className={`product-view-info-informations__return ${openReturn ? 'product-view-info-informations__return--open' : ''}`}>
            <button onClick={()=> setOpenReturn(!openReturn)}>Polityka zwrotów</button>
            <div className="desc">{privacyPolicy}</div>
        </div>
    )

}
export default ReturntPrivacyComponent