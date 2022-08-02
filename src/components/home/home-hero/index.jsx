import {Wrapper , WrapperHero , WrapperHeroLeft ,WrapperHeroRight , BottomCloud ,ImageDogs , WrapperContainer} from "./styled-index"
import Button from "../../common/buttons/buttons"
import CloudImg from "./../../../assets/images/home/cloud-big.svg"
import CloudImgSmall from "./../../../assets/images/home/cloud-small.svg"
import CloudImgSend from "./../../../assets/images/home/cloud-send.png"
import ImageDog from "./../../../assets/images/home/image-dog.png"
import MovingComponent from 'react-moving-text'
const HomeHero = () =>{
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
                <h1>Крафтовые лакомства для собак</h1>
                </MovingComponent>

                    <MovingComponent
                type="blur"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                         <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                </MovingComponent>
                    <Button title="Каталог" imgSrc={true} bg={"white"} pd={"16px 28px"}/>
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
        </WrapperContainer>
        </Wrapper>
    )
}
export default HomeHero