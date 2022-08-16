import {initializeApp} from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAGFrCWc63GOQqRESkidlC0jD9v5dEg2f8",
    authDomain: "crwn-hordog.firebaseapp.com",
    projectId: "crwn-hordog",
    storageBucket: "crwn-hordog.appspot.com",
    messagingSenderId: "922602084298",
    appId: "1:922602084298:web:37bfcad724a931f23a2133",
    measurementId: "G-JSRDNSWHM6"
  };
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  export const auth = getAuth();
  export const signWithGooglePopup = () => signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect =()=> signInWithRedirect(auth,provider); 
  export const db = getFirestore();

  export const createUserDocumentFromtAuth = async (userAuth,additionalInformation ={}) =>{
    if (!userAuth) return; 
    const userDocRef = doc(db , 'users' ,userAuth.uid)

  const userSnapShot = await getDoc(userDocRef);
    if (!userSnapShot.exists()) {
        const {displayName , email} = userAuth;
        const createdAt = new Date();
        try{
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
          })
        }catch(error){
          console.log('error creating the user' , error.message);
        }
    }
    return userDocRef;
  }
  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth , email , password)
  }
  export const signInCreateAuthUserWithEmailAndPassword = async (email,password)=>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth , email , password)
  }
  export const signOutUser = async ()=> await signOut(auth);
  export const onAuthStateChangedListener= (callback) => onAuthStateChanged(auth,callback);