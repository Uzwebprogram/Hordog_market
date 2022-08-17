import { Card , CardTop , News} from "./styled-index"
import LikeIcon from "./../../../assets/images/home/like-icon.svg"
import RemoveIcon from "./../../../assets/images/Favorites/RemoveIcon.svg"
import Button from "./../../../components/common/buttons/buttons"
import { useTranslation } from "react-i18next"
import { useContext, useRef } from "react"
import { CartContext } from "../../../contexts/like-product.context"


const FavoritesCard = ({products}) =>{
    const {t , i18} = useTranslation();
    const {ProductSkidka,  ProductNewsUz, ProductNameUz, aksiya_priceUz ,  priceUz ,ProductNewsRu, ProductNameRu, aksiya_priceRu ,  priceRu  , ProductNewsEn, ProductNameEn, aksiya_priceEn ,  priceEn, ProductImage , PriceMuchRu, PriceMuchUz,PriceMuchEn,  id} = products;

    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    
    return(
        <>
        {getValue()==='uz'?                
        <Card key={id}>
            <CardTop>
            {ProductSkidka ? <span>{ProductSkidka}</span>: ProductNewsUz ? <News>{ProductNewsUz}</News>:null}
            <img src={RemoveIcon} style={{cursor:"pointer"}}  width={24} height={24} alt="Like Icon" />
            </CardTop>
            <img src={ProductImage} width={206} height={187} alt="Card Img" />
            {aksiya_priceUz ?<span>{aksiya_priceUz}</span> :<span style={{color:"white"}}>;;</span>}
            <p>{`${priceUz} ming so'm`}</p>
            <span>{PriceMuchUz}</span>
            <h5>{ProductNameUz}</h5>
            <Button  title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
        </Card>
        :getValue()==='ru'?
        <Card key={id}>
            <CardTop>
            {ProductSkidka ? <span>{ProductSkidka}</span>: ProductNewsRu ? <News>{ProductNewsRu}</News>:null}
            <img src={RemoveIcon}  width={24} height={24} alt="Like Icon" />
            </CardTop>
            <img src={ProductImage} width={206} height={187} alt="Card Img" />
            {aksiya_priceRu ?<span>{aksiya_priceRu}</span> :<span style={{color:"white"}}>.</span>}
            <p>{`${priceRu} ₽`}</p>
            <span>{PriceMuchRu}</span>
            <h5>{ProductNameRu}</h5>
            <Button   title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
    </Card>
        :getValue()==='en'?
        <Card key={id}>
            <CardTop>
            {ProductSkidka ? <span>{ProductSkidka}</span>: ProductNewsEn ? <News>{ProductNewsEn}</News>:null}
            <img src={RemoveIcon}  width={24} height={24} alt="Like Icon" />
            </CardTop>
            <img src={ProductImage} width={206} height={187} alt="Card Img" />
            {aksiya_priceEn ?<span>{aksiya_priceEn}</span> :<span style={{color:"white"}}>.</span>}
            <p>{`${priceEn} $`}</p>
            <span>{PriceMuchEn}</span>
            <h5>{ProductNameEn}</h5>
            <Button   title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
        </Card>
        :null}
        </>
    )
}
export default FavoritesCard