import "tailwindcss/tailwind.css"

interface ButtonProps{
    title?: string
    className?: string
    onChange?: (e:any) => void
}
export const Button =(props:ButtonProps)=>{
    return(
        <>
        <button className={`w-[100%] text-white  pl-3 h-[2.5rem] rounded-lg py-1 px-4 bg-green-500 hover:bg-green-400 ${props.className}`} onClick={props.onChange}>
           <strong>{props.title}</strong>
        </button>
        </>
    )
}