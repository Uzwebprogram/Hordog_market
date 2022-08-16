import { Wrapper  , NavLink_Footer , Button} from "./styled-index"
import HomeIcon from "./../../../assets/images/header/Home.svg"
import CatalogIcon from "./../../../assets/images/header/Catalog.svg"
import CartIcon from "./../../../assets/images/header/Cart.svg"
import Favorites from "./../../../assets/images/header/Favorites.svg"
import HeaderDogIcon from "./../../../assets/images/header/header-dog-icon.svg"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import {UserContext} from "./../../../contexts/user.context"
import {Link} from "react-router-dom"
const MediaFooter = ( {onClick})=>{
  const {t, i18} = useTranslation();
  const { currentUser} = useContext(UserContext)
    return(
        <Wrapper>
 <NavLink_Footer >
 <Link to="/">
 <img src={HomeIcon} alt={HomeIcon}/>
</Link>
    <span>{t("Media-Footer.0")}</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={CatalogIcon} alt={CatalogIcon}/></i>
    <span>{t("Media-Footer.1")}</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={CartIcon} alt={CartIcon}/></i>
    <span>{t("Media-Footer.2")}</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={Favorites} alt={Favorites}/></i>
    <span>{t("Media-Footer.3")}</span>
  </NavLink_Footer>
  <NavLink_Footer>
{ currentUser?(<>
  <Link to="/profile">                     
     <Button  data-target="#modal1" onClick={onClick}><img  src={HeaderDogIcon} width="22" height="20"  alt="header-dog-icon"/></Button></Link>
    <span>{t("Media-Footer.4")}</span></>):<>
  <i>                     
     <Button  data-target="#modal1" onClick={onClick}><img  src={HeaderDogIcon} width="22" height="20"  alt="header-dog-icon"/></Button></i>
    <span>{t("Media-Footer.4")}</span></>}
  </NavLink_Footer>
        </Wrapper>
    )
}
export default MediaFooter