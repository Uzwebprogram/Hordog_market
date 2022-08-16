import { Wrapper ,WrapperTop , WrapperContent , MenuFooter , MenuFooterFlex , WrapperContentList } from "./styled-index";
import CloseHamburger from "./../../../assets/images/header/close-hamburger.svg"
import catalogClose from "./../../../assets/images/home/catalog/catalogClose.svg"
import iconStrelkaRight from "./../../../assets/images/header/icon-strelka-left.svg"
import {useTranslation} from "react-i18next"
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import {signOutUser} from "./../../../utils/firebase/firebase.utils"
import {useNavigate} from "react-router-dom"
import { ProductContext } from "../../../contexts/catalog-products.context";
const MenuCatalog = ({MenuClickFixed , onClick1}) =>{
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    const { t, i18n } = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.value
        i18n.changeLanguage(lang)
      }
    const {currentUser , setCurrentUser} = useContext(UserContext)
    const {products} = useContext(ProductContext)
    let history = useNavigate();
    return(
        <Wrapper>
            <WrapperTop>
            <img onClick={onClick1} src={catalogClose} width={24} height={24} alt={catalogClose} />
           <span>{t("Header-media-menu.0")}</span>
            </WrapperTop>
            <WrapperContentList>
                {products.map((elem) =><>
                    <li key={elem.id}>
                    <div>
                    <img src={elem.CatalogIcon} alt={elem.CatalogIcon} width={24} height={24} />
                    {getValue() ==='uz' ?<span>{elem.CatalogNameUz}</span>:getValue()==='ru' ?<span>{elem.CatalogNameRu}</span>:getValue()==='en' ?<span>{elem.CatalogNameEn}</span>:null}
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                </>)}
            </WrapperContentList>
        </Wrapper>
    )
} 
export default MenuCatalog