import ModalSearch from "./modal-search/index"
import MenuContent from "./menu-content"
import ModalCommon from "../common/modal"
import MediaFooter from "./media-footer"
import MenuCatalog from "./menu-catalog"
import SingIn from "./sign-in"
import SingUp from "./sign-up"
import UpdatePassword from "./update-password"
import {Wrapper , WrapperContainer  ,SearchFunc ,Search ,Overlay , HamburgerIcon , ImgMedia , ImgDesktop , MenuMedia, LanWrapper } from "./styled-header"
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../../assets/images/header/logo.svg"
import LogoMedia from "../../assets/images/header/LogoMedia.svg"
import SearchIcon from "./../../assets/images/header/Search.svg"
import SearchClose from "./../../assets/images/header/close-search.svg"
import LikeIcon from "./../../assets/images/header/like-icon.svg"
import ProfileIcon from "./../../assets/images/header/profile-icon.svg"
import cartIcon from "./../../assets/images/header/cart-icon.svg"
import HamburgerMedia from "./../../assets/images/header/hamburger-media.svg"
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/user.context"
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Header =() => {
  const { t, i18n } = useTranslation();
  const handleLang = (e) =>{
    const lang = e.target.value
    i18n.changeLanguage(lang)
    window.location.reload()
  }

  const { currentUser} = useContext(UserContext)
  const[monster , monsterSet] = useState([])
  const[WordEnter , SetWordEnter] = useState([])
  const [monsterFilter , SetmonsterFilter] = useState([])
  const [activeModal , setActiveModal] = useState(0);
  const [activeModal2 , setActiveModal2] = useState(0);

  const  MenuClickFixed= useRef();
  const ChangeModal = (activeModal) =>{
    setActiveModal(activeModal)
    setOpen(true);
    MenuClickFixed.current.style.left= "900px"
  }
  const ChangeModal2 = (activeModal) =>{
    setActiveModal2(activeModal)
    MenuClickFixed.current.style.left = "0px"
  }
  const  SearchCloseFunc= useRef();
  const  SearchFun= useRef();
  const  OverlayFixed= useRef();
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(users => monsterSet(users))
      },[])
  const SearchChange =(event)=>{
        const searchWord = event.target.value.toLowerCase()
        SetWordEnter(searchWord)
        const newFilter = monster.filter((value)=>{
            return  value.name.toLowerCase().includes(searchWord)
        })
        if (searchWord === "") {
        SetmonsterFilter([])
        }else{
        SetmonsterFilter(newFilter)
        }
        if (event.target.value === "") {
                SearchCloseFunc.current.style.display ="none"
                SearchFun.current.style.display ="flex"
                OverlayFixed.current.style.display ="none"

        }else{
                SearchCloseFunc.current.style.display ="flex"
                SearchFun.current.style.display ="none"
                OverlayFixed.current.style.display ="flex"
        }    
  }
  const handleClear = () =>{
        SetmonsterFilter([])
        SetWordEnter("")
        OverlayFixed.current.style.display ="none"
        SearchCloseFunc.current.style.display ="none"
        SearchFun.current.style.display ="flex"
    }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "8px",
    border: '2px solid #fff',
    width: "320px",
  };
    return(
        <>
    <MenuMedia  ref={MenuClickFixed}>
      {activeModal2 === 1?<MenuContent MenuClickFixed={MenuClickFixed} onClick2={()=>ChangeModal2(2)} onClick={()=>ChangeModal(1)}/>:activeModal2 === 2 ?(
        <MenuCatalog onClick1={()=>ChangeModal2(1)}/>
      ):null}
    </MenuMedia>
    <Wrapper>
        <WrapperContainer>
        <Link to="/"><ImgDesktop src={Logo} width={191} height={72} alt={Logo} /></Link>
        <ImgMedia src={LogoMedia} width={48} height={48} alt={Logo} />
        <SearchFunc >
        <Search placeholder={t('Header.0')} onChange={SearchChange} value={WordEnter} />
        <img className="search-Close" onClick={handleClear} ref={SearchCloseFunc} width={24} height={24} src={SearchClose}  alt={SearchClose}/>
        <img className="search" ref={SearchFun} width={24} height={24} src={SearchIcon}  alt={SearchIcon}/>
        </SearchFunc>
        <ul>
        <li>
                            <button onClick={handleLang} value="uz">
                            Uz
                            </button>
                        </li>
                        <li>
                            <button onClick={handleLang}  value="ru">
                            Ru
                            </button>
                        </li>
                        <li>
                            <button onClick={handleLang}  value="en">                       
                            En</button>
                        </li>
        </ul>
        <ul>
            <li><img width={24} height={24} src={LikeIcon} alt={LikeIcon} /></li>
            <li><img width={24} height={24} src={cartIcon} alt={cartIcon} /></li>
            {currentUser?(<li><NavLink to="/profile"><img width={24} height={24} src={ProfileIcon} alt={ProfileIcon}/></NavLink></li>):<li><img width={24} height={24} onClick={()=>ChangeModal(1)} src={ProfileIcon} alt={ProfileIcon}/></li>}
        </ul>
        <HamburgerIcon onClick={() =>ChangeModal2(1)} src={HamburgerMedia} width={24} height={24} alt="" />
        </WrapperContainer>
        
    </Wrapper>
    {monsterFilter.length != 0 &&(
    <ModalSearch searchdata={monsterFilter}/>
    )}
 {currentUser?(<ModalCommon none="none"   open={open}  handleClose={handleClose} >
     </ModalCommon>):(<ModalCommon  style={styles2}  open={open}  handleClose={handleClose} >
      {activeModal === 1 ?(
      <SingIn handleClose={handleClose} onClick={()=>ChangeModal(2)}   onClick2={()=>ChangeModal(3)}/>
      ): activeModal === 2 ?(
     <SingUp handleClose={handleClose} onClick={()=>ChangeModal(1)}/>
      ): activeModal === 3 ?(
      <      UpdatePassword handleClose={handleClose}/>
         ): activeModal === 4 ?(
          <h1>Qabul boldi</h1>
):null}
     </ModalCommon>)}
      <MediaFooter onClick={()=>ChangeModal(1)} />
        </>
    )
}
export default Header