import {  WrapperContainer } from "./styled-home"
import HomeHero from "../../components/home/home-hero"
import HomeAbout from "../../components/home/home-about"
const Home =()=>{
    return(
        <>
            <HomeHero/>
            <WrapperContainer>
                <HomeAbout/>
            </WrapperContainer>
        </>
    )
}
export default Home