import HeroImage from '../../assets/dlapublishera.webp';
import BackgroundImage from '../../assets/main-page.jpg';
import { motion } from "framer-motion";

const HeroElement = ()=>{
    return(
        <div className="hero" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="hero-container">

                <motion.div 
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 1.5
                  }}
                className="hero__text">
                    <p>Power up your game</p>
                    <h1>Cyber Kid infinite</h1>
                    <p>Now Available o PC & console</p>
                </motion.div>
                <motion.img 
                    src={HeroImage}
                    alt="Hero image"
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        delay: .5,
                        bounce: 0.3,
                        duration: 1.5
                  }} />
                </div>
        </div>
    )
}
export default HeroElement