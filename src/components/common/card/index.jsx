import { Card , CardTop , News} from "./styled.index"
import LikeIcon from "./../../../assets/images/home/like-icon.svg"
// import CardImage from "./../../../assets/images/home/homeCard.png"
import Button from "./../../../components/common/buttons/buttons"
import { useTranslation } from "react-i18next"
const Cards = ({aksiya , news , CardImage , aksiya_price , price , much , title})=>{
    const {t , i18} = useTranslation();
    return(
        <Card>
            <CardTop>
            {aksiya ? <span>{aksiya}</span>: news ? <News>{news}</News>:null}
            <img src={LikeIcon} width={24} height={24} alt="Like Icon" />
            </CardTop>
            <img src={CardImage} width={206} height={187} alt="Card Img" />
            {aksiya_price ?<span>{aksiya_price}</span> :<span style={{color:"white"}}>.</span>}
            <p>{price}</p>
            <span>{much}</span>
            <h5>{title}</h5>
            <Button title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
        </Card>
        
    )
}
export default Cards