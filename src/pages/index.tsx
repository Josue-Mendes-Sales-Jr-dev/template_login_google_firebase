
import { Layout } from '@/components/layout'
import UseAppContext from '../hook/context'


export default function Home() {
  const ctx = UseAppContext()
  return (
    <>
     <Layout className='bg-green-600'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <h1 className='h-[5vh]'>{ctx.name}</h1>
        <div className='w-[100%] h-[80vh]'>
          Dashboard
        </div>
      </div>
     </Layout>
    </>
  )
}
