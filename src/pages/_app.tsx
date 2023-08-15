import { AuthProvider } from '@/auth'
import { AppProvider } from '@/data/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
     <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </AuthProvider>
    
  )
}
