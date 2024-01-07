import { NavLink } from "react-router-dom";
import { useGlobalState } from '../state/isOpenStore';

//import styles
import "../Style/Nav.css";

//import images
import Logo from '../assets/logo.svg';
import IconUser from '../assets/user';
import IconShoppingCart from '../assets/cart';

const Nav = ()=>{
    const { state, setIsOpen } = useGlobalState();
    const openDropDownHandler = ()=>{
        setIsOpen(!state.isOpen);
    }


    return(
        <nav>
            <div className="nav__logo">
                <img src={Logo} alt="Store Logo" />
            </div>

            <div className="nav-items">
                
                <NavLink className="nav-items__item" to="/products">Produkty</NavLink>
                <a className="nav-items__user" onClick={openDropDownHandler}>
                    <IconUser width='24px' height='30px'/>
                    <div className={`nav-items-dropdown ${state.isOpen && "nav-items-dropdown--open"}`}>
                        <NavLink to="/login">Zaloguj</NavLink>    
                        <NavLink to="/register">Zarejestruj</NavLink>    
                    </div>  
                </a>
                <NavLink className="nav-items__cart" to="/cart">
                    <IconShoppingCart width='24px' height='30px'/>
                </NavLink>
            </div>

        </nav>
    )
}

export default Nav;