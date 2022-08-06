import { Wrapper  , NavLink_Footer , Button} from "./styled-index"
import HomeIcon from "./../../../assets/images/header/Home.svg"
import CatalogIcon from "./../../../assets/images/header/Catalog.svg"
import CartIcon from "./../../../assets/images/header/Cart.svg"
import Favorites from "./../../../assets/images/header/Favorites.svg"
import HeaderDogIcon from "./../../../assets/images/header/header-dog-icon.svg"
const MediaFooter = ( {onClick})=>{
    return(
        <Wrapper>
 <NavLink_Footer >
    <i><img src={HomeIcon} alt={HomeIcon}/></i>
    <span>Главная</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={CatalogIcon} alt={CatalogIcon}/></i>
    <span>Каталог</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={CartIcon} alt={CartIcon}/></i>
    <span>Главная</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i><img src={Favorites} alt={Favorites}/></i>
    <span>Избранное</span>
  </NavLink_Footer>
  <NavLink_Footer>
    <i>                     
     <Button  data-target="#modal1" onClick={onClick}><img  src={HeaderDogIcon} width="22" height="20"  alt="header-dog-icon"/></Button></i>
    <span>Профиль</span>
  </NavLink_Footer>
        </Wrapper>
    )
}
export default MediaFooter