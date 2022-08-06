import { Wrapper , WrapperTop  ,UpdatePass ,Buttons} from "./styled-index"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import { signWithGooglePopup , createUserDocumentFromtAuth , createAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils"
import { useState } from "react"
const defaultFormFields = {
    displayName : "",
    email :"",
    password :"",
    confirmPassword : ""
}
const SingUp = ({handleClose , onClick}) =>{
    const [formFields , setFormFields] = useState(defaultFormFields);
    const {displayName , email , password, confirmPassword} = formFields;
    const [ErrorText , setErrorText] = useState(false)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const logGoogleUser = async () =>{
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromtAuth(user)
    }
    console.log(formFields);
    const HandleSubmit = async (event) =>{
        event.preventDefault();
        if (password === confirmPassword) {
            alert("password do not match")
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromtAuth(user ,{displayName})
            resetFormFields();
            setErrorText(false)
        }catch(error){
            if (error.code == 'auth/email-already-in-use') {
                setErrorText(true)
            }else{
            console.log('user creation encountered an error',error);
            }
        }
    }
    const HandleChange = (event) =>{
        const {name , value} = event.target
        setFormFields({...formFields , [name] : value})
    }
    return(
        <Wrapper onSubmit={HandleSubmit}>
            <WrapperTop>
                <span onClick={handleClose}>&times;</span>
                <h2>Регистрация</h2>
                <Input onChange={HandleChange} placeholder="Показать имя" name="displayName" value={displayName}  type="text" marginBottom="8px"/>
                <Input onChange={HandleChange} placeholder="Email" name="email" type="email" value={email} marginBottom="8px"/>
                <Input onChange={HandleChange} placeholder="Пароль" name="password" type="password" value={password} marginBottom="10px"/>
                <Input onChange={HandleChange} placeholder="Подтвердить Пароль" name="confirmPassword" value={confirmPassword} type="password" marginBottom="10px"/>
            </WrapperTop>
            <Buttons>
            {ErrorText == false&&
            <h6 style={{display : "none"}}>Невозможно создать пользователя, электронная почта уже используется</h6>
            }
            {ErrorText == true&&
            <h6 style={{display : "block"}}>Невозможно создать пользователя, электронная почта уже используется</h6>
            }
            <UpdatePass>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</UpdatePass>
            <Button border="1px solid #CFD8DC" bg="#FED700" type="submit" marginBottom="8px" title={<h4>Регистрация</h4>}/>
            <Button border="1px solid #CFD8DC" marginBottom="8px" onClick={onClick} title={<h5>Войти</h5>}/>
            <Button border="1px solid #CFD8DC" marginBottom="8px" onClick={logGoogleUser} title={<p>Google</p>}/>
            </Buttons>
        </Wrapper>
    )
}
export default SingUp