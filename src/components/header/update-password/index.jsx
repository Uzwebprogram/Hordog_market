import { Wrapper , WrapperTop  ,UpdatePass ,Buttons ,UpdatePassAbout} from "./styled-index"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import { signWithGooglePopup , createUserDocumentFromtAuth } from "../../../utils/firebase/firebase.utils"
import { useTranslation } from 'react-i18next';
const UpdatePassword = ({handleClose}) =>{
  const { t, i18n } = useTranslation();
    const logGoogleUser = async () =>{
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromtAuth(user)
    }
    return(
        <Wrapper>
            <WrapperTop>
                <span onClick={handleClose}>&times;</span>
                <h2>{t("Sign-up.13")}</h2>
           <UpdatePass>{t("Sign-up.14")}</UpdatePass>
                <Input placeholder={t("Sign-up.2")} type="email" marginBottom="8px"/>
            </WrapperTop>
            <Buttons>
            <UpdatePassAbout>{t("Sign-up.15")}</UpdatePassAbout>
            <Button  border="1px solid #CFD8DC" bg="#FED700" pd=" 14px 0px" width="100%"  marginBottom="8px" title={t("Sign-up.16")}/>
            </Buttons>
        </Wrapper>
    )
}
export default UpdatePassword