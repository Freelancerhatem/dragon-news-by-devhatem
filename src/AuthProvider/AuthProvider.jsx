import {createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase.config";
import {  signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

 // facebok provider
 const facebookprovider = new FacebookAuthProvider();
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
    const AuthProvider = ({children}) => {
        const [user,setUser] = useState([]);
        const[loading,setLoading] = useState(true);
        // create user
        const createUser = (email,password)=>{
            setLoading(true);
           return createUserWithEmailAndPassword(auth,email,password);
        };
        // logout
        const logout =()=>{
            setLoading(true);
           return signOut(auth)
        }
        // login
        const login =(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);

        }
        const facbookLogin=()=>{
            setLoading(true)
          return  signInWithPopup(auth,facebookprovider)
        }


        //save user information 
       useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        });
        return ()=>{

            unSubscribe()
        }
       },[]);
        // context info props
    const authInfo ={
        user,
        createUser,
        logout,
        login,
        facbookLogin,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;