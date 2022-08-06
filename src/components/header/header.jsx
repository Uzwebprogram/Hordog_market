import ModalSearch from "./modal-search/index"
import MenuContent from "./menu-content"
import ModalCommon from "../common/modal"
import MediaFooter from "./media-footer"
import SingIn from "./sign-in"
import SingUp from "./sign-up"
import UpdatePassword from "./update-password"
import {Wrapper , WrapperContainer  ,SearchFunc ,Search ,Overlay , HamburgerIcon , ImgMedia , ImgDesktop , MenuMedia ,MediaFooterContainer } from "./styled-header"
import Logo from "../../assets/images/header/logo.svg"
import LogoMedia from "../../assets/images/header/LogoMedia.svg"
import SearchIcon from "./../../assets/images/header/Search.svg"
import SearchClose from "./../../assets/images/header/close-search.svg"
import LikeIcon from "./../../assets/images/header/like-icon.svg"
import ProfileIcon from "./../../assets/images/header/profile-icon.svg"
import cartIcon from "./../../assets/images/header/cart-icon.svg"
import HamburgerMedia from "./../../assets/images/header/hamburger-media.svg"
import { useEffect, useRef, useState } from "react";

const Header =() => {
  const[monster , monsterSet] = useState([])
  const[WordEnter , SetWordEnter] = useState([])
  const [monsterFilter , SetmonsterFilter] = useState([])
  const [activeModal , setActiveModal] = useState(0);
  const  MenuClickFixed= useRef();
  const ChangeModal = (activeModal) =>{
    setActiveModal(activeModal)
    setOpen(true);
    MenuClickFixed.current.style.left= "900px"
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
  const MenuClick = () =>{
    MenuClickFixed.current.style.left = "0px"
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles = {
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
     <MenuContent MenuClickFixed={MenuClickFixed} onClick={()=>ChangeModal(1)} />
    </MenuMedia>
    <Wrapper>
        <WrapperContainer>
        <ImgDesktop src={Logo} width={191} height={72} alt={Logo} />
        <ImgMedia src={LogoMedia} width={48} height={48} alt={Logo} />
        <SearchFunc >
        <Search placeholder="Поиск" onChange={SearchChange} value={WordEnter} />
        <img className="search-Close" onClick={handleClear} ref={SearchCloseFunc} width={24} height={24} src={SearchClose}  alt={SearchClose}/>
        <img className="search" ref={SearchFun} width={24} height={24} src={SearchIcon}  alt={SearchIcon}/>
        </SearchFunc>
        <ul>
            <li><img width={24} height={24} src={LikeIcon} alt={LikeIcon} /></li>
            <li><img width={24} height={24} src={cartIcon} alt={cartIcon} /></li>
            <li><img width={24} height={24} onClick={()=>ChangeModal(1)} src={ProfileIcon} alt={ProfileIcon}/></li>
        </ul>
        <HamburgerIcon onClick={MenuClick} src={HamburgerMedia} width={24} height={24} alt="" />
        </WrapperContainer>
        
    </Wrapper>
    {monsterFilter.length != 0 &&(
    <ModalSearch searchdata={monsterFilter}/>
    )}
    <ModalCommon  style={styles}  open={open}  handleClose={handleClose}>
 
      {activeModal === 1 ?(
      <SingIn handleClose={handleClose} onClick={()=>ChangeModal(2)} onClick2={()=>ChangeModal(3)}/>

      ): activeModal === 2 ?(
     <SingUp handleClose={handleClose} onClick={()=>ChangeModal(1)}/>
      ): activeModal === 3 ?(
        <      UpdatePassword handleClose={handleClose}/>
         ):null}
     </ModalCommon>
      <MediaFooter onClick={()=>ChangeModal(1)} />
        </>
    )
}
export default Header