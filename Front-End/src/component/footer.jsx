import Linkedin from '../assets/LinkedIn_icon.svg';

//import styles
import "../Style/Footer.css";

const Footer = ()=>{

    return(
        <footer>
            <div className="footer-container">
                <div className="coppy">
                    Copyright © Paweł Ryng
                </div>
                <div className="social-links">
                    <a className="social-links__linkedin" href="https://www.linkedin.com/in/pawel-ryng/" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;