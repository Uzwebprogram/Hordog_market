import {Buttons} from "./styled-button"
import StrelkaLeft from "./../../../assets/images/header/icon-strelka-left.svg"
const Button = ({type, onClick , bg, title ,imgSrc ,pd , border , marginBottom }) =>{
    return(
        <>
        <Buttons type={type} onClick={onClick} style={{background : bg , padding: pd , border: border , marginBottom :marginBottom }}>{title} 
        {imgSrc&&(
        <img src={StrelkaLeft} width={8} height={14}  alt={StrelkaLeft}/>
        )}
        </Buttons>
        </>
    )
}
export default Button