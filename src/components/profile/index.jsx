import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Button from "../common/buttons/buttons"
import {signOutUser} from "./../../utils/firebase/firebase.utils"
import {useNavigate} from "react-router-dom"
function ProfileComponent() {
    const {currentUser,setCurrentUser} = useContext(UserContext)
    let history = useNavigate();
    const HandleUserOut =  async() =>{
          await signOutUser();
          setCurrentUser(null)
          history('/')
        }
    return(
        <><Button onClick={HandleUserOut} title="Выйти"/></>
    )
}
export default ProfileComponent