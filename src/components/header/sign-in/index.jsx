import { Wrapper , WrapperTop  ,UpdatePass ,Buttons} from "./styled-index"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import { signWithGooglePopup , createUserDocumentFromtAuth } from "../../../utils/firebase/firebase.utils"
const SingIn = ({handleClose , onClick , onClick2}) =>{
    const logGoogleUser = async () =>{
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromtAuth(user)
    }
    return(
        <Wrapper>
            <WrapperTop>
                <span onClick={handleClose}>&times;</span>
                <h2>Вход</h2>
                <Input placeholder="Email" type="email" marginBottom="8px"/>
                <Input placeholder="Пароль" type="password" marginBottom="10px"/>
            </WrapperTop>
            <Buttons>
            <UpdatePass onClick={onClick2}>Восстановить пароль</UpdatePass>
            <Button border="1px solid #CFD8DC" bg="#FED700" marginBottom="8px" title={<h4>Войти</h4>}/>
            <Button border="1px solid #CFD8DC" onClick={onClick} marginBottom="8px" title={<h5>Регистрация</h5>}/>
            <Button border="1px solid #CFD8DC" marginBottom="8px" onClick={logGoogleUser} title={<p>Google</p>}/>
            </Buttons>
        </Wrapper>
    )
}
export default SingIn