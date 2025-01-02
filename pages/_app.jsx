import { UserProvider } from '../context/UserContext'
import { SessionProvider } from '@/context/SessionContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </UserProvider>
  )
}
