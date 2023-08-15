import { title } from "process"
import "tailwindcss/tailwind.css"
interface CardProps{
    children: React.ReactNode
    title: string

}
export const Card = (props:CardProps)=>{
    return(
        <>
        <form action="#" className="flex w-[18rem] lg:w-1/4 flex-col items-center justify-center gap-5 p-8 rounded-lg bg-white">
            <h2 className="text-center text-[1.4rem] w-[20rem]">
                <strong>{props.title}</strong>
            </h2>
            <div className="flex flex-col items-center justify-center gap-3">
                {props.children}
            </div>
        </form>
        </>
    )
}