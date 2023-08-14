import { title } from "process"
import "tailwindcss/tailwind.css"
interface CardProps{
    children: React.ReactNode
    title: string

}
export const Card = (props:CardProps)=>{
    return(
        <>
        <form action="#">
            <h2>
                {props.title}
            </h2>
            <div>
                {props.children}
            </div>
        </form>
        </>
    )
}