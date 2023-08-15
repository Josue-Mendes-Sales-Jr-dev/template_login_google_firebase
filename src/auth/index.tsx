import { createContext, useState } from "react";
import Router from "next/router";
import Usuario from "@/model/usuario";
import firebase from "../firebase";

interface AuthProps{
    children: React.ReactNode
}
interface AuthContextProps{
    onChance?:(e:any) => Promise<void>
    usuario?: Usuario
}
const AuthContext=createContext({} as AuthContextProps)

const route=Router
async function Normal(usuarioFirebase: firebase.User):Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return{
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        imagemUrl: usuarioFirebase.photoURL
    }
    
}


export function AuthProvider(props:AuthProps){
    const [usuario, setUsuario] = useState<Usuario>()

    async function handleGoogle(){
        const resp= await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
             )
             console.log(resp.user)    
            if(resp.user?.email){
                const usuarioData = await Normal(resp.user)
                setUsuario(usuarioData)
                console.log("entrar pelo GOOGLE_FONT_PROVIDER..")
                route.push('/')     
            }
     
    }
    return(
    <AuthContext.Provider value={{onChance: handleGoogle, usuario}}>
      {props.children}
    </AuthContext.Provider>)
}

export default AuthContext