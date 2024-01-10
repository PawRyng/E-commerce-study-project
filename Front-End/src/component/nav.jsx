import { NavLink } from "react-router-dom";
import { useGlobalState } from '../state/isOpenStore';
import { useEffect, useState } from "react";

//import styles
import "../Style/Nav.css";

//import images
import Logo from '../assets/logo.svg';
import IconUser from '../assets/user';
import IconShoppingCart from '../assets/cart';

const Nav = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken]  = useState();
    const [isAdmin, setIsAdmin]  = useState(false);
    useEffect(()=>{
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            setToken(storedToken);
            const isAdminVar = JSON.parse(atob(storedToken.split('.')[1])).isAdmin 
            console.log(JSON.parse(atob(storedToken.split('.')[1])));
            if(isAdminVar){
                setIsAdmin(isAdminVar)
            }
        }
        console.log(isAdmin)
    }, []);

    const logoutHandle = ()=>{
        setToken(null);
        localStorage.removeItem("token")
    }

    return(
        <nav>
            <div className="nav__logo">
                <img src={Logo} alt="Store Logo" />
            </div>

            <div className="nav-items">
                
                <NavLink className="nav-items__item" to="/products">Produkty</NavLink>
                <a className="nav-items__user" onClick={()=> setIsOpen(!isOpen)}>
                    <IconUser width='24px' height='30px'/>
                    <div className={`nav-items-dropdown ${isOpen && "nav-items-dropdown--open"}`}>
                        {!token ? (<>
                            <NavLink to="/login">Zaloguj</NavLink>
                            <NavLink to="/register">Zarejestruj</NavLink>
                        </>
                            ) : (<>
                            {
                                isAdmin && <NavLink to="/add-product">Dodaj produkt</NavLink>
                            }    
                                <NavLink onClick={logoutHandle}>Wyloguj</NavLink>    
                            </>                   
                            )

                        
                    }
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