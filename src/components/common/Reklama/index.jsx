import { Wrapper } from "./styled-index"

const Reklama = ({ruBanner , uzBanner , enBanner , ruMediaBanner , uzMediaBanner , enMediaBanner}) =>{
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    return(
        <Wrapper>
            {getValue()==='ru'?ruBanner:getValue()==='uz'?uzBanner:getValue()==='en'?enBanner:null}
            {getValue()==='ru'? ruMediaBanner:getValue()==='uz'?uzMediaBanner:getValue()==='en'?enMediaBanner:null}
        </Wrapper>
    )
}   
export default Reklama