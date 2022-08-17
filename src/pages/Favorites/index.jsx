import {Wrapper} from "./index-styled"
import { CartContext } from "../../contexts/like-product.context"
import { useContext } from "react"
import FavoritesComponents from "../../components/Favorites"
import CardMap from "../../components/Favorites/card_map"
import { useTranslation } from "react-i18next"
import {NavLink} from "react-router-dom"
const Favorites = ()=>{
    const {cartItems} = useContext(CartContext)
    const {t , i18} = useTranslation()
    return(
        <>
                <Wrapper>
        
                <NavLink to="/" style={{textDecoration : "none"}}><span>{t("Favorites.3")}</span></NavLink>
                <CardMap/>
                {cartItems.length === 0 ? <FavoritesComponents/>:null}

        </Wrapper>

        </>
    )
}
export default Favorites