import ProductCart from "../productCart";
import Slider from "react-slick";

const BestSeller = ({itemList})=>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true
      };

    return(
        <div className="best-seller">
            <div className="best-seller-container">
                <div className="best-seller__title">
                    Best seller
                </div>
                <div className="best-seller-items">
                <Slider {...settings}>
                    {Array.isArray(itemList) && itemList.length > 0
                    ? (itemList.map((product, index) => <ProductCart key={index} product={product}/>)) : (<p>Brak produktów do wyświetlenia</p>)}
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default BestSeller