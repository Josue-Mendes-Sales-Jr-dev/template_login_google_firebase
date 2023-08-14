import "tailwindcss/tailwind.css"
interface LayoutProps{
    placeHolder: string
    type: string
    className: string
    value: any
    onChange: (e:any) => void
}
export const Layout =(props:LayoutProps)=>{
    return(
        <>
        <input type={props.type} className={props.className} placeholder={props.placeHolder} value={props.value} onChange={props.onChange}/>
        </>
    )
}