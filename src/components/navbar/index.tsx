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
        <div className={`${props.className} bg-gray-500 flex flex-col w-1/12 h-[100vh] items-center justify-center`}
        >
              
        </div>
        </>
    )
}