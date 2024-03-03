import React, { useEffect, useState } from 'react'
import { createContext,useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    RecaptchaVerifier,
    signInWithPhoneNumber,

} from 'firebase/auth';
import {auth} from '../../30 books library/firebase-crud';

const authContext = createContext();

export const UserAuthContextProvider = ({children}) => {
    const [user,setUser]=useState("")
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        console.log("came to sign in with google")
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }

    const forgetPassword=(email)=>{
        console.log("forget email",email)
        return sendPasswordResetEmail(auth,email)
    }

    const getRecaptchaVerify = (number)=>{
         const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
         // recaptcha-container is HTML element,that is we passed it as ID to a div in phone signUP component so that that div will appera when getReCapthaverify function is called.
        //  recaptchaVerifier.render()
         return signInWithPhoneNumber(auth,number,recaptchaVerifier);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])
  return <authContext.Provider value={{signUp,logIn,user,signOut,signInWithGoogle,forgetPassword,auth,getRecaptchaVerify}}>{children}</authContext.Provider>
}


export const useUserAuth = ()=>{
    return useContext(authContext);
}
