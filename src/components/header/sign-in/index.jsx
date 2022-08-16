import { useRef, useState , useContext } from "react"
import { signWithGooglePopup , createUserDocumentFromtAuth, signInCreateAuthUserWithEmailAndPassword,  } from "../../../utils/firebase/firebase.utils"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import IconsEye from "./../../../assets/images/header/icons-eye.png"
import IconsEyeIcons from "./../../../assets/images/header/icons-eye-close.png"
import { Wrapper , WrapperTop  ,UpdatePass ,Buttons , ErrorIcon , Inputs} from "./styled-index"
import { UserContext } from "../../../contexts/user.context"
import { useTranslation } from 'react-i18next';
const defaultFormFields = {
    email :"",
    password :"",
}
const SingIn = ({handleClose , onClick , onClick2}) =>{
  const { t, i18n } = useTranslation();
    const logGoogleUser = async () =>{
        await signWithGooglePopup();
    }
    const [formFields , setFormFields] = useState(defaultFormFields);
    const PasswordError = useRef()
    const EmailError = useRef()
    const IconError = useRef()
    const [Eye , setEye] = useState(true)
    const { email , password} = formFields;
    const [ErrorText , setErrorText] = useState(false)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const HandleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const {user} = await signInCreateAuthUserWithEmailAndPassword(email, password)
            resetFormFields();  
            setErrorText(false);
            PasswordError.current.style.border = "1px solid #CFD8DC"
            PasswordError.current.style.background = "white"
        }catch(error){
            console.log(error);
            if (error.code === "auth/wrong-password") {
                EmailError.current.style.border = "1px solid #CFD8DC"
                EmailError.current.style.background = "white"
                PasswordError.current.style.border = "1px solid red"
                PasswordError.current.style.background = "rgba(246, 215, 215, 0.167)"
            }
            if (error.code === "auth/user-not-found") {
                EmailError.current.style.border = "1px solid red"
                EmailError.current.style.background = "rgba(246, 215, 215, 0.167)"
                PasswordError.current.style.border = "1px solid red"
                PasswordError.current.style.background = "rgba(246, 215, 215, 0.167)"
            }
        }
    }
    const handleIcon = () =>{   
        PasswordError.current.type = "password"
        setEye(true)
    }
    const handleIcon2 = () =>{   
        PasswordError.current.type = "text"
        setEye(false)
    }
    const HandleChange = (event) =>{
        const {name , value} = event.target
        setFormFields({...formFields , [name] : value})
    }
    return(
        <Wrapper onSubmit={HandleSubmit}>
            <WrapperTop>
                <span onClick={handleClose}>&times;</span>
                <h2>{t("Sign-up.0")}</h2>
                <Input ErrorRef={EmailError} onChange={HandleChange} name="email" placeholder={t("Sign-up.1")} value={email} type="email" marginBottom="8px"/>
                <Input ErrorRef={PasswordError} onChange={HandleChange} name="password" placeholder={t("Sign-up.2")}  value={password} type="password" marginBottom="10px"/>
                {!Eye&&<ErrorIcon onClick={handleIcon} ref={IconError} src={IconsEye} width={24} height={24} alt={IconsEye}/>}
                {Eye &&<ErrorIcon onClick={handleIcon2} ref={IconError} src={IconsEyeIcons} width={24} height={24} alt={IconsEye}/>}            
                </WrapperTop>
            <Buttons>
            <UpdatePass onClick={onClick2}>{t("Sign-up.3")}</UpdatePass>
            <Button border="1px solid #CFD8DC" type="submit" bg="#FED700"   pd=" 14px 0px" marginBottom="8px" title={t("Sign-up.4")}/>
            <Button border="1px solid #CFD8DC" type="button" onClick={onClick}  pd=" 14px 0px" marginBottom="8px" title={t("Sign-up.5")}/>
            <Button border="1px solid #CFD8DC" type="button" marginBottom="8px" onClick={logGoogleUser} title={<p>Google</p>}/>
            </Buttons>
        </Wrapper>
    )
}
export default SingIn