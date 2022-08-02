import styled from "styled-components";
import HeroImg from "./../../../assets/images/home/hero-img.png"

export const Wrapper = styled.div`
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -160px;
    height: 624px;
    padding-top: 160px;
    @media only screen and (max-width: 560px) {
        height: 774px;
    }
`
export const WrapperHero = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    @media only screen and (max-width: 560px) {
        flex-direction: column;
    }
`
export const ImageDogs = styled.img`
    margin-top: -120px;
    width: 100%;
    @media only screen and (max-width: 560px) {
        margin-top: -80px;

    }
`
export const WrapperContainer = styled.div`
    width: 71%;
    margin: 0 auto;
    padding: 0 10px;
    @media only screen and (max-width: 768px) {
     margin: 0 auto;
     width: 90%;
    }
`
export const WrapperHeroRight = styled.div`
    width: 45%;
    img:nth-child(1){
        position: relative;
        animation: zoomies 10s infinite linear;
        top: 100px;
    }
    img:nth-child(3){
        position: relative;
        animation: zoomies2 11s infinite linear;
        top: 100px;
    }
    @media only screen and (max-width: 560px) {
        width: 100%;
        img:nth-child(3){
        position: relative;
        animation: zoomies2 5s infinite linear;
        top: 120px;
        width: 230px;
        height: 54px;
    }
    img:nth-child(1){
        position: relative;
        animation: zoomies 10s infinite linear;
        top: 130px;
    }
    }
 @keyframes zoomies{
    from{
        left: 0;
    }
    to{
        left: 20%;
    }
    
 }
 @keyframes zoomies2{
    from{
        left: 0;
    }
    to{
        left: 20%;
    }
 }
`
export const BottomCloud = styled.img`
        position: relative;
        animation: zoomies 5s infinite linear;
        bottom: 50px;
        @media only screen and (max-width: 560px) {
            width: 100px;
            height: 24px;
            bottom: 110px;
    }
`
export const WrapperHeroLeft = styled.div`
    width: 42%;
    h1{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 52px;
        color: #1A1A1A;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        color: #1A1A1A;
        margin-bottom: 40px;
    }
    @media only screen and (max-width: 768px) {
        width: 50%;
     h1{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 42px;
        color: #1A1A1A;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        color: #1A1A1A;
        margin-bottom: 40px;
    }
    }
    @media only screen and (max-width: 560px) {
        width: 100%;
    }
` 