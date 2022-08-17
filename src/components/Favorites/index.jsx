import { Wrapper } from "./styled-index"
import NotFoundLike from "./../../assets/images/Favorites/not_found.svg"
import { useTranslation } from "react-i18next"
import { useContext } from "react";
import { CartContext } from "../../contexts/like-product.context";

const FavoritesComponents = () =>{
    const {t , i18} = useTranslation();
    return(
        <Wrapper>
        <h1>{t("Favorites.0")}</h1>
        <img src={NotFoundLike} width={600} height={450} alt="Not found Img"/>
        <h3>{t("Favorites.1")}</h3>
        <span>{t("Favorites.2")}</span>
        </Wrapper>
    )
}
export default FavoritesComponents