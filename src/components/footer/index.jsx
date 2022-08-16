import { Wrapper } from "./styled.index"
import FooterLogo from "./../../assets/images/footer/logo-footer.svg"
import FooterIcon1 from "./../../assets/images/footer/telegram.svg"
import FooterIcon2 from "./../../assets/images/footer/icon-instagram.svg"
import FooterIcon3 from "./../../assets/images/footer/icon-viber.svg"
import FooterIcon4 from "./../../assets/images/footer/icon-vk.svg"
import FooterIcon5 from "./../../assets/images/footer/icon-whatsapp.svg"

import {NavLink} from "react-router-dom"
const Footer = () =>{
    const style = {
        fontFamily: 'Nunito',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "14px",
        color: "#1A1A1A",
        textDecoration  :"none"
      }
    return(
        <Wrapper>
            <ul>
                <li>
                    <img src={FooterLogo} width={180} height={114} alt={FooterLogo}/>
                    <span>© «Интернет-магазин натуральных лакомств для собак HorDog.ru»</span>
                </li>
                <li>
                    <span><NavLink style={style} to="/">Каталог</NavLink></span>
                    <span><NavLink style={style} to="/">Акции</NavLink></span>
                    <span><NavLink style={style} to="/">Новости</NavLink></span>
                    <span><NavLink style={style} to="/">Отзывы</NavLink></span>
                </li>
                <li>
                    <span><NavLink style={style} to="/">Оплата и доставка</NavLink></span>
                    <span><NavLink style={style} to="/">Часто спрашивают</NavLink></span>
                    <span><NavLink style={style} to="/">Обратная связь</NavLink></span>
                    <span><NavLink style={style} to="/">Контакты</NavLink></span>
                </li>
                <li>
                    <h4>Мы на связи</h4>
                    <h3>8 (917) 717-21-79</h3>
                    <h5>hordog.ru@gmail.com</h5>
                    <div>
                        <img src={FooterIcon1} width={24} height={24} alt={FooterIcon1}/>
                        <img src={FooterIcon2} width={24} height={24} alt={FooterIcon2}/>
                        <img src={FooterIcon3} width={24} height={24} alt={FooterIcon3}/>
                        <img src={FooterIcon4} width={24} height={24} alt={FooterIcon4}/>
                        <img src={FooterIcon5} width={24} height={24} alt={FooterIcon5}/>
                    </div>
                    <span>© «Интернет-магазин натуральных лакомств для собак HorDog.ru»</span>
                </li>
            </ul>
        </Wrapper>
    )
}
export default Footer