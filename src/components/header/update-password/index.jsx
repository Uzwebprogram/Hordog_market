import { Wrapper , WrapperTop  ,UpdatePass ,Buttons ,UpdatePassAbout} from "./styled-index"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import { signWithGooglePopup , createUserDocumentFromtAuth } from "../../../utils/firebase/firebase.utils"
const UpdatePassword = ({handleClose}) =>{
    const logGoogleUser = async () =>{
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromtAuth(user)
    }
    return(
        <Wrapper>
            <WrapperTop>
                <span onClick={handleClose}>&times;</span>
                <h2>Восстановление пароля</h2>
           <UpdatePass>Для получения временного пароля необходимо ввести email, указанный при регистрации.</UpdatePass>
                <Input placeholder="Email" type="email" marginBottom="8px"/>
            </WrapperTop>
            <Buttons>
            <UpdatePassAbout>Срок действия временного пароля 24 ч.</UpdatePassAbout>
            <Button border="1px solid #CFD8DC" bg="#FED700" marginBottom="8px" title={<h4>Отравить</h4>}/>
            </Buttons>
        </Wrapper>
    )
}
export default UpdatePassword