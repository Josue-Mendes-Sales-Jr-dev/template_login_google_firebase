import Link from "next/link"
import "tailwindcss/tailwind.css"
interface NavbarProps{
    children?:React.ReactNode
    title?: string
    className?: string
    onChange?: (e:any) => void
}
export const Navbar =(props:NavbarProps)=>{
    return(
        <>
        <div className={`${props.className} bg-gray-500 flex flex-col w-1/12 h-[100vh] items-center gap-5`}
        >
             <nav className="w-[100%]">
                <ul className=" flex flex-col items-center justify-center gap-2 pt-10 w-[100%] border-box">
                    <li className="hover:bg-green-600 rounded-tl-3xl rounded-bl-3xl h-[3rem] w-[100%]  flex items-center justify-center "><Link className="px-[1rem]" href="/">home</Link></li>
                    <li className="hover:bg-green-600 rounded-tl-3xl rounded-bl-3xl h-[3rem] w-[100%]  flex items-center justify-center "><Link href="/">vídeos</Link></li>
                    <li className="hover:bg-green-600 rounded-tl-3xl rounded-bl-3xl h-[3rem] w-[100%]  flex items-center justify-center "><Link href="/">formulário</Link></li>
                </ul>
            </nav> 
        </div>
        </>
    )
}