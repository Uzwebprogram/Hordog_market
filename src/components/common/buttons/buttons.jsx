import {Buttons} from "./styled-button"
import StrelkaLeft from "./../../../assets/images/header/icon-strelka-left.svg"
const Button = ({type, onChange , bg, title ,imgSrc ,pd}) =>{
    return(
        <>
        <Buttons type={type} onChange={onChange} style={{background : bg , padding: pd}}>{title} 
        {imgSrc&&(
        <img src={StrelkaLeft} width={8} height={14}  alt={StrelkaLeft}/>
        )}
        </Buttons>
        </>
    )
}
export default Button