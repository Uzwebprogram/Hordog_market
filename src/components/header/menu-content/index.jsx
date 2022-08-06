import { Wrapper ,WrapperTop , WrapperContent , MenuFooter } from "./styled-index";
import CloseHamburger from "./../../../assets/images/header/close-hamburger.svg"
import ConntentMenu1 from "./../../../assets/images/header/content-menu1.svg"
import ConntentMenu2 from "./../../../assets/images/header/content-menu2.svg"
import ConntentMenu3 from "./../../../assets/images/header/content-menu3.svg"
import ConntentMenu4 from "./../../../assets/images/header/content-menu4.svg"
import ConntentMenu5 from "./../../../assets/images/header/content-menu5.svg"
import iconStrelkaRight from "./../../../assets/images/header/icon-strelka-left.svg"
import AdminIcon from "./../../../assets/images/header/admin-icon.svg"

const MenuContent = ({MenuClickFixed , onClick}) =>{
    const MenuClose = () =>{
        MenuClickFixed.current.style.left= "900px"
    }
    const dataMenu = [
        {id : 1, iconLeft : `${ConntentMenu1}` , title :"Каталог" , iconRight : `${iconStrelkaRight}`},
        {id : 2, iconLeft : `${ConntentMenu2}` , title :"Избранное" , iconRight : `${iconStrelkaRight}`},
        {id : 3, iconLeft : `${ConntentMenu3}` , title :"Акции" , iconRight : `${iconStrelkaRight}`},
        {id : 4, iconLeft : `${ConntentMenu4}` , title :"Новости" , iconRight : `${iconStrelkaRight}`},
        {id : 5, iconLeft : `${ConntentMenu5}` , title :"Отзывы" , iconRight : `${iconStrelkaRight}`},
    ]
    return(
        <Wrapper>
            <WrapperTop>
            <img onClick={MenuClose} src={CloseHamburger} width={24} height={24} alt={CloseHamburger} />
            <span onClick={onClick}>Войти</span>
            </WrapperTop>
            <WrapperContent>
                {dataMenu.map((elem) =><>
                    <li key={elem.id}>
                    <div>
                    <img src={elem.iconLeft} alt={elem.iconLeft} width={24} height={24} />
                    <span>{elem.title}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                </>)}
            </WrapperContent>
            <WrapperContent>
                <li>Оплата и доставка</li>
                <li>Часто спрашивают</li>
                <li>Обратная связь</li>
                <li>Контакты</li>
            </WrapperContent>
            <MenuFooter>
                    <img src={AdminIcon} width={32} height={32} alt={AdminIcon} />
                    <div>
                        <p>Остались вопросы?</p>
                        <span>Обратитесь в нашу службу поддержки</span>
                        <button>Перейти</button>
                    </div>
            </MenuFooter>
        </Wrapper>
    )
} 
export default MenuContent