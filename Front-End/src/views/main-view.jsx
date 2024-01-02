import { useLoaderData } from "react-router-dom";

//import elements
import Nav from "../component/nav"
import HeroElement from "../component/main-view-components/Hero"
import BestSeller from "../component/main-view-components/BestSellers";
import Footer from "../component/footer";
//import styles
import '../Style/Main_View.css';




const MainView = ()=>{

    const { bestsellers } = useLoaderData();
    

    return(
        <>
        <Nav />
        <HeroElement />
        <BestSeller itemList={bestsellers.data} />
        <Footer />
        </>
    )
}

export default MainView