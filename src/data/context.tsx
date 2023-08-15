import { createContext } from "react";

interface CxtProps{
    name?:string
}
interface AppProps{
    children?:React.ReactNode
}

const AppContext= createContext({} as CxtProps)

export function AppProvider(props:AppProps){
    return(
       <AppContext.Provider value={{name:'Junior Mendes'}}>
        {props.children}
       </AppContext.Provider>
    )
} 

export default AppContext