import { ReactNode } from 'react'
import useUser from '@/hooks/useUser'
import { Stack } from '@mui/material'
import Navbar from './Navbar'
import LoadingPage from './LoadingPage'
import Login from './Login'

export default function Layout ({ children, disableLoader }: { children: ReactNode, disableLoader?: boolean }) {
  const { user, loading, userSession } = useUser()
  return (
    <Stack flexDirection='row'>
      {userSession && !loading && <Navbar />}
      <main style={{ minHeight: '100vh', flexGrow: 1, display: 'flex', flexDirection: 'column', paddingTop: 80 }}>
        {loading && !disableLoader && <LoadingPage />}
        {disableLoader && <>{children}</>}
        {user && userSession && !loading && !disableLoader && <>{children}</>}
        {!userSession && !loading && <Login />}
      </main>
    </Stack>
  )
}
