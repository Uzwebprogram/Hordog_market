import { Wrapper ,WrapperTop , WrapperContent , MenuFooter } from "./styled-index";
import CloseHamburger from "./../../../assets/images/header/close-hamburger.svg"
import ConntentMenu1 from "./../../../assets/images/header/content-menu1.svg"
import ConntentMenu2 from "./../../../assets/images/header/content-menu2.svg"
import ConntentMenu3 from "./../../../assets/images/header/content-menu3.svg"
import ConntentMenu4 from "./../../../assets/images/header/content-menu4.svg"
import ConntentMenu5 from "./../../../assets/images/header/content-menu5.svg"
import iconStrelkaRight from "./../../../assets/images/header/icon-strelka-left.svg"
import AdminIcon from "./../../../assets/images/header/admin-icon.svg"
import {useTranslation} from "react-i18next"
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import {signOutUser} from "./../../../utils/firebase/firebase.utils"
import {useNavigate} from "react-router-dom"
const MenuContent = ({MenuClickFixed , onClick}) =>{
    const { t, i18n } = useTranslation();
    const {currentUser , setCurrentUser} = useContext(UserContext)
    const MenuClose = () =>{
        MenuClickFixed.current.style.left= "900px"
    }
    let history = useNavigate();
    const HandleUserOut =  async() =>{
          await signOutUser();
          setCurrentUser(null)
          history('/')
        }
    const dataMenu = [
        {id : 1, iconLeft : `${ConntentMenu1}` , title :t("Header-media-menu.0") , iconRight : `${iconStrelkaRight}`},
        {id : 2, iconLeft : `${ConntentMenu2}` , title :t("Header-media-menu.1") , iconRight : `${iconStrelkaRight}`},
        {id : 3, iconLeft : `${ConntentMenu3}` , title :t("Header-media-menu.2"), iconRight : `${iconStrelkaRight}`},
        {id : 4, iconLeft : `${ConntentMenu4}` , title :t("Header-media-menu.3"), iconRight : `${iconStrelkaRight}`},
        {id : 5, iconLeft : `${ConntentMenu5}` , title :t("Header-media-menu.4"), iconRight : `${iconStrelkaRight}`},
    ]
    return(
        <Wrapper>
            <WrapperTop>
            <img onClick={MenuClose} src={CloseHamburger} width={24} height={24} alt={CloseHamburger} />
            
            {currentUser?(<span  onClick={HandleUserOut}>{t("Header-media-menu.13")}</span>):(<span onClick={onClick}>{t("Header-media-menu.12")}</span>)}
            </WrapperTop>
            <WrapperContent>
                {dataMenu.map((elem) =><>
                    <li key={elem.id}>
                    <div>
                    <img src={elem.iconLeft} alt={elem.iconLeft} width={24} height={24} />
                    <span>{elem.title}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                </>)}
            </WrapperContent>
            <WrapperContent>
                <li>{t("Header-media-menu.5")}</li>
                <li>{t("Header-media-menu.6")}</li>
                <li>{t("Header-media-menu.7")}</li>
                <li>{t("Header-media-menu.8")}</li>
            </WrapperContent>
            <MenuFooter>
                    <img src={AdminIcon} width={32} height={32} alt={AdminIcon} />
                    <div>
                        <p>{t("Header-media-menu.9")}</p>
                        <span>{t("Header-media-menu.10")}</span>
                        <button>{t("Header-media-menu.11")}</button>
                    </div>
            </MenuFooter>
        </Wrapper>
    )
} 
export default MenuContent