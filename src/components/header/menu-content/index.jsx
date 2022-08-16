import { Wrapper ,WrapperTop , WrapperContent , MenuFooter , MenuFooterFlex } from "./styled-index";
import CloseHamburger from "./../../../assets/images/header/close-hamburger.svg"

import UzFlag from "../../../assets/images/header/uzbekistan-flag-icon.svg"
import RuFlag from "../../../assets/images/header/russian-flag.png"
import EnFlag from "../../../assets/images/header/england-flag.png"
import AdminIcon from "./../../../assets/images/header/admin-icon.svg"
import {useTranslation} from "react-i18next"
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import {signOutUser} from "./../../../utils/firebase/firebase.utils"
import {useNavigate} from "react-router-dom"
import MenuContentItem from "./menu-Content-item";
const MenuContent = ({MenuClickFixed , onClick , onClick2}) =>{
    const { t, i18n } = useTranslation();
    const handleLang = (e) =>{
        const lang = e.target.value
        i18n.changeLanguage(lang)
        window.location.reload()
      }
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

    return(
        <Wrapper>
            <WrapperTop>
            <img onClick={MenuClose} src={CloseHamburger} width={24} height={24} alt={CloseHamburger} />
            
            {currentUser?(<span  onClick={HandleUserOut}>{t("Header-media-menu.13")}</span>):(<span onClick={onClick}>{t("Header-media-menu.12")}</span>)}
            </WrapperTop>
            <MenuContentItem onClick3={onClick2}/>
            <WrapperContent>
                <li>{t("Header-media-menu.5")}</li>
                <li>{t("Header-media-menu.6")}</li>
                <li>{t("Header-media-menu.7")}</li>
                <li>{t("Header-media-menu.8")}</li>
            </WrapperContent>
            <MenuFooter>
                    <ul>
                        <li>
                            <button onClick={handleLang} value="uz">
                            <img src={UzFlag} width={24} height={24} style={{marginRight:"5px"}} alt="" />
                            Uz
                            </button>
                        </li>
                        <hr />
                        <li>
                            <button onClick={handleLang}  value="ru">
                            <img src={RuFlag} width={24} height={24} style={{marginRight:"5px"}} alt="" />
                            Ru
                            </button>
                        </li>
                        <hr />
                        <li>
                            <button onClick={handleLang}  value="en">                       
                                <img src={EnFlag} width={24} height={24} style={{marginRight:"5px"}} alt="" />
                            En</button>
                        </li>
                    </ul>
                    <MenuFooterFlex>
                    <img src={AdminIcon} width={32} height={32} alt={AdminIcon} />
                    <div>
                        <p>{t("Header-media-menu.9")}</p>
                        <span>{t("Header-media-menu.10")}</span>
                        <button>{t("Header-media-menu.11")}</button>
                    </div>
                    </MenuFooterFlex>
 
            </MenuFooter>
        </Wrapper>
    )
} 
export default MenuContent