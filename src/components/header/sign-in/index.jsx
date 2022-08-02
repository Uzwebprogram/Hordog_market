import { Wrapper } from "./styled-index"
import { signWithGooglePopup , createUserDocumentFromtAuth } from "../../../utils/firebase/firebase.utils"
const SingIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signWithGooglePopup();
        const userDocRef = await createUserDocumentFromtAuth(user)
    }
    return(
        <Wrapper>
            <button onClick={logGoogleUser}>Google</button>
        </Wrapper>
    )
}
export default SingIn