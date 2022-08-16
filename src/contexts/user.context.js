import { createContext, useState , useEffect} from "react";
import { createUserDocumentFromtAuth, onAuthStateChangedListener  } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) =>{
    useEffect(() => {
        const unsubcribe= onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromtAuth(user);
            }
            setCurrentUser(user)
        });
        return unsubcribe;
    }, [])
    const [currentUser , setCurrentUser] = useState(null);
    const value = {currentUser , setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}