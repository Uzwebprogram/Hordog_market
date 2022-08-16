import {Wrapper} from "./index.styled"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({children , title , Speed}) =>{
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: Speed,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1267,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          } , 
              {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },]
      };
    return(
        <Wrapper>
        <h2>{title}</h2>
        <Slider {...settings}>
            {children}
        </Slider>
        </Wrapper>
    )    
}
export default Sliders