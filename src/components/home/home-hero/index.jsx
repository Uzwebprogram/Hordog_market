import { useContext } from "react"
import { ProductContext } from "../../../contexts/catalog-products.context"
import {Wrapper , WrapperHero , WrapperHeroLeft ,WrapperHeroRight , BottomCloud ,ImageDogs , WrapperContainer , WrapperHeroBottom , WrapperHeroBottomCatalog} from "./styled-index"
import Button from "../../common/buttons/buttons"
import CloudImg from "./../../../assets/images/home/cloud-big.svg"
import CloudImgSmall from "./../../../assets/images/home/cloud-small.svg"
import CloudImgSend from "./../../../assets/images/home/cloud-send.png"
import ImageDog from "./../../../assets/images/home/image-dog.png"
import MovingComponent from 'react-moving-text'
import Catalog from "./../../../data/shop-data.json"
import { useTranslation } from 'react-i18next';
import { useState } from "react"
const HomeHero = () =>{
  const [LangValue , SetLangValue] = useState([]);
  const { t, i18n } = useTranslation();
  const {products} = useContext(ProductContext)
  function getValue() {
	return localStorage.getItem('i18nextLng');  
}
    return(
        <Wrapper>
        <WrapperContainer>
            <WrapperHero>
                <WrapperHeroLeft>
                <MovingComponent
                type="blur"
                duration="5000ms"
                delay="3s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h1>{t("Home-Hero.0")}</h1>
                </MovingComponent>

                    <MovingComponent
                type="blur"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                         <p>{t("Home-Hero.1")}</p>
                </MovingComponent>
                    <Button title={t("Home-Hero.2")} imgSrc={true} bg={"white"} pd={"16px 28px"}/>
                </WrapperHeroLeft>
                <WrapperHeroRight>
                   <img src={CloudImgSend} width={107} height={59} alt={CloudImgSend} />
                    <br />
                    <img src={CloudImg} width={212} height={78}  alt={CloudImg}  />
                    <ImageDogs src={ImageDog}  alt="" />
                    <br />
                    <BottomCloud src={CloudImgSmall} width={174} height={59} alt={CloudImgSmall} />
                </WrapperHeroRight>
            </WrapperHero>
            <WrapperHeroBottom>
                {products.slice(0,6).map((elem)=>
                <WrapperHeroBottomCatalog>
                <img src={elem.CatalogIcon} alt={elem.CatalogIcon} style={{marginBottom:"20px"}} />
                {getValue() === "ru" ?<span>{elem.CatalogNameRu}</span>:getValue() === "uz" ?<span>{elem.CatalogNameUz}</span>: getValue() === "en" ?<span>{elem.CatalogNameEn}</span>:null}
                </WrapperHeroBottomCatalog>)}
            </WrapperHeroBottom>
        </WrapperContainer>
        </Wrapper>
    )
}
export default HomeHero