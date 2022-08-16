import { Wrapper , WrapperTop  ,UpdatePass ,Buttons} from "./styled-index"
import Input from "../../common/inputs"
import Button from "../../common/buttons/buttons"
import {createUserDocumentFromtAuth , createAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils"
import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/user.context"
import { useTranslation } from 'react-i18next';

const defaultFormFields = {
    displayName : "",
    email :"",
    password :"",
    confirmPassword : ""
}
const SingUp = ({handleClose , onClick}) =>{
  const { t, i18n } = useTranslation();

   
    const [formFields , setFormFields] = useState(defaultFormFields);
    const {displayName , email , password, confirmPassword} = formFields;
    const [ErrorText , setErrorText] = useState(false)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
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
                <h2>{t("Sign-up.6")}</h2>
                <Input onChange={HandleChange} placeholder={t("Sign-up.7")} name="displayName" value={displayName}  type="text" marginBottom="8px"/>
                <Input onChange={HandleChange} placeholder={t("Sign-up.2")} name="email" type="email" value={email} marginBottom="8px"/>
                <Input onChange={HandleChange} placeholder={t("Sign-up.3")} name="password" type="password" value={password} marginBottom="10px"/>
                <Input onChange={HandleChange} placeholder={t("Sign-up.10")}  name="confirmPassword" value={confirmPassword} type="password" marginBottom="10px"/>
            </WrapperTop>
            <Buttons>
            {ErrorText == false&&
            <h6 style={{display : "none"}}>{t("Sign-up.17")}</h6>
            }
            {ErrorText == true&&
            <h6 style={{display : "block"}}>{t("Sign-up.17")}</h6>
            }
            <UpdatePass>{t("Sign-up.9")}</UpdatePass>
            <Button border="1px solid #CFD8DC" bg="#FED700"  pd=" 14px 0px"  type="submit" marginBottom="8px" title={t("Sign-up.5")}/>
            <Button border="1px solid #CFD8DC" pd=" 14px 0px" marginBottom="8px" onClick={onClick} title={t("Sign-up.4")}/>
            </Buttons>
        </Wrapper>
    )
}
export default SingUp