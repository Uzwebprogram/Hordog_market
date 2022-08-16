import {Wrapper} from "./index.styled"
import ConntentMenu1 from "../../../../assets/images/header/content-menu1.svg"
import ConntentMenu2 from "../../../../assets/images/header/content-menu2.svg"
import ConntentMenu3 from "../../../../assets/images/header/content-menu3.svg"
import ConntentMenu4 from "../../../../assets/images/header/content-menu4.svg"
import ConntentMenu5 from "../../../../assets/images/header/content-menu5.svg"
import iconStrelkaRight from "../../../../assets/images/header/icon-strelka-left.svg"
import { useTranslation } from "react-i18next"
const MenuContentItem = ({onClick3})=>{
    const { t, i18n } = useTranslation();
    return(
        <Wrapper>
                    <li onClick={onClick3} >
                    <div>
                    <img src={ConntentMenu1} alt={ConntentMenu1} width={24} height={24} />
                    <span>{t("Header-media-menu.0")}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                    <li>
                    <div>
                    <img src={ConntentMenu2} alt={ConntentMenu2} width={24} height={24} />
                    <span>{t("Header-media-menu.1")}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                    <li>
                    <div>
                    <img src={ConntentMenu3} alt={ConntentMenu3} width={24} height={24} />
                    <span>{t("Header-media-menu.2")}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                    <li>
                    <div>
                    <img src={ConntentMenu4} alt={ConntentMenu4} width={24} height={24} />
                    <span>{t("Header-media-menu.3")}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
                    <li>
                    <div>
                    <img src={ConntentMenu5} alt={ConntentMenu5} width={24} height={24} />
                    <span>{t("Header-media-menu.4")}</span>
                    </div>
                    <img src={iconStrelkaRight} width={8} height={14} alt="" />
                    </li>
        </Wrapper>
    )
}
export default MenuContentItem