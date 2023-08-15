import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
interface LayoutProps{
    children?:React.ReactNode
    title?: string
    className?: string
    onChange?: (e:any) => void
}
export const Layout =(props:LayoutProps)=>{
    return(
        <>
        <div className="flex w-screen h-full">
            <Navbar/>
            <div className={`${props.className} flex w-[100%] h-[100vh] items-center justify-center`}
            >
                    {props.children}
            </div>
        </div>
        </>
    )
}