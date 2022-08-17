import { Card , CardTop , News} from "./styled.index"
import LikeIcon from "./../../../assets/images/home/like-icon.svg"
import Favorites from "./../../../assets/images/home/favorites.svg"
import Button from "./../../../components/common/buttons/buttons"
import { useTranslation } from "react-i18next"
import { useContext, useRef, useState } from "react"
import { CartContext } from "../../../contexts/like-product.context"
const Cards = ({products })=>{
    const {t , i18} = useTranslation();    
    const [like_Dislike, setLike_Dislike]= useState(true)

    const {addItemToCart , removeItemToCart} = useContext(CartContext)
    const {ProductSkidka,  ProductNewsUz, ProductNameUz, aksiya_priceUz ,  priceUz ,ProductNewsRu, ProductNameRu, aksiya_priceRu ,  priceRu  , ProductNewsEn, ProductNameEn, aksiya_priceEn ,  priceEn, ProductImage , PriceMuchRu, PriceMuchUz,PriceMuchEn,  id} = products;
    const addProductToCart = (e) => {
        addItemToCart(products)
        setLike_Dislike(false)
    }
    const RemoveroductToCart = () => {
        setLike_Dislike(true)
        removeItemToCart(products)
    }
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    return(
        <>

        {getValue()==='uz'?                
        <Card key={id}>
            <CardTop>
            {ProductSkidka ? <span>{ProductSkidka}</span>: ProductNewsUz ? <News>{ProductNewsUz}</News>:null}
            {like_Dislike === true ?<img src={LikeIcon}  style={{cursor:"pointer"}}  onClick={addProductToCart} width={24} height={24} alt="Like Icon" />:null}
            {like_Dislike === false ? <img src={Favorites}   style={{cursor:"pointer" , }}  onClick={RemoveroductToCart} width={24} height={24} alt="Like Icon" /> : null}
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
            {like_Dislike === true ?<img src={LikeIcon}  style={{cursor:"pointer"}}  onClick={addProductToCart} width={24} height={24} alt="Like Icon" />:null}
            {like_Dislike === false ? <img src={Favorites}   style={{cursor:"pointer" , }}  onClick={RemoveroductToCart} width={24} height={24} alt="Like Icon" /> : null}
            </CardTop>
            <img src={ProductImage} width={206}  height={187} alt="Card Img" />
            {aksiya_priceRu ?<span>{aksiya_priceRu}</span> :<span style={{color:"white"}}>.</span>}
            <p>{`${priceRu} ₽`}</p>
            <span>{PriceMuchRu}</span>
            <h5>{ProductNameRu}</h5>
            <Button  onClick={addProductToCart} title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
    </Card>
        :getValue()==='en'?
        <Card key={id}>
            <CardTop>
            {ProductSkidka ? <span>{ProductSkidka}</span>: ProductNewsEn ? <News>{ProductNewsEn}</News>:null}
            {like_Dislike === true ?<img src={LikeIcon}  style={{cursor:"pointer"}}  onClick={addProductToCart} width={24} height={24} alt="Like Icon" />:null}
            {like_Dislike === false ? <img src={Favorites}   style={{cursor:"pointer" , }}  onClick={RemoveroductToCart} width={24} height={24} alt="Like Icon" /> : null}
            </CardTop>
            <img src={ProductImage} width={206} height={187} alt="Card Img" />
            {aksiya_priceEn ?<span>{aksiya_priceEn}</span> :<span style={{color:"white"}}>.</span>}
            <p>{`${priceEn} $`}</p>
            <span>{PriceMuchEn}</span>
            <h5>{ProductNameEn}</h5>
            <Button  onClick={addProductToCart} title={t("Home-button-cart.0")}  bg="#FED700" pd="10px 18px"/>
        </Card>
        :null}
        </>
    )
}
export default Cards