import "tailwindcss/tailwind.css"
interface InputProps{
    placeHolder?: string
    type?: string
    className?: string
    value?: any
    onChange?: (e:any) => void
}
export const Input =(props:InputProps)=>{
    return(
        <>
        <input type={props.type} className={`bg-gray-300 text-center w-[100%] pl-3 h-[2.5rem] rounded-lg ${props.className}`} placeholder={props.placeHolder} value={props.value} onChange={props.onChange}/>
        </>
    )
}