import { useTranslation } from "react-i18next"
import NotFoundGif from "./../../assets/images/NotFound/bg.gif"
import { Wrapper } from "./index.styled"
const NotFound = () =>{
    const [t , i18] = useTranslation()
    return(
        <Wrapper>
        <h1>404</h1>
        <img src={NotFoundGif} width={600} height={450} alt={NotFoundGif} />
        <h3>{t("Not-Found.0")}</h3>
        <span>{t("Not-Found.1")}</span>
        </Wrapper>
    )
}
export default NotFound