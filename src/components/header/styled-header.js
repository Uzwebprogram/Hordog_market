import styled from "styled-components";
import UzFlag from "./../../assets/images/header/uzbekistan-flag-icon.svg"
import RuFlag from "./../../assets/images/header/russian-flag.png"
import EnFlag from "./../../assets/images/header/england-flag.png"

export const Wrapper =styled.div`
    width: 100%;
    z-index: 10000;
    margin: 0 auto;
    background-color: #FED700;
   ul li button{
        cursor: pointer;
    }

`
export const WrapperContainer = styled.div`
    width: 82%;
    margin: 0 auto;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    ul{
        margin: 0;
        padding: 0;
        width: 137px;
        display: flex;
        justify-content: space-between;
        list-style-type: none;       
        align-items: center;
    }
    li{
    button{
        font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: black;
            background-color: transparent;
            border: transparent;
        }
   }
    li:nth-child(1) button::before{
        content: "";
        display: block;
        background-image: url(${UzFlag});
        width: 24px;
        height: 18px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        right: 3px;
    }
    li:nth-child(2) button::before{
        content: "";
        display: block;
        background-image: url(${RuFlag});
        width: 24px;
        height: 24px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        right: 3px;
    }
    li:nth-child(3) button::before{
        content: "";
        display: block;
        background-image: url(${EnFlag});
        width: 24px;
        height: 24px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        right: 3px;
    }
    ul li{
        cursor: pointer;
    }
    @media only screen and (max-width: 768px) {
     width: 90%;
        ul{
            display: none;
        }
    }
`
export const ImgMedia = styled.img`
    display: none;
    @media only screen and (max-width: 560px) {
        display: flex;
        margin-top: 10px;
}
`
export const ImgDesktop = styled.img`
    display: flex;
    @media only screen and (max-width: 560px) {
        display: none;
    }
`

export const HamburgerIcon = styled.img`
display: none;
        @media only screen and (max-width: 768px) {
            display: flex;
            margin-top: 20px;
}
`
export const SearchFunc = styled.div`
    margin: 0;
    padding: 0;
    width: 46%;
    display: flex;
    border-radius: 29px;
    height: 48px;
    padding: 0px 20px;
    background-color: white;
    margin-top: 15px;
    .search-Close{
        display: none;
        margin-top: 11px;
        cursor: pointer;
    }
    .search{
        margin-top: 11px;
    }
    `
export const Search = styled.input`
    margin: 0;
    padding: 0;
    width: 100%;
    border: 1px solid transparent;
    outline: transparent;
    background-color: transparent;
    :focus ~ h1{
        display: block;
    }
`
export const Overlay = styled.div`
  display:none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 86%;
  background: #E5E5E5;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
`
export const MenuMedia = styled.div`
    display: none;
@media only screen and (max-width: 768px) {
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: 10000;
            background-color: white;
            left: 900px;
            transition: 1s ;
}
`
  export const LanWrapper = styled.div`
    position: relative;
  svg {
    position: absolute;
    top: 12px;
    color: #fff;
    z-index: 10;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-width: 0 !important;
  }
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
    width: 70px;
  }
  `