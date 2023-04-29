import Head from 'next/head'
import Login from '@/components/Login'

export default function Home () {
  return (
    <>
      <Head>
        <title>El Buen Sabor</title>
        <meta name='description' content='Final project UTN rework' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Login />
    </>
  )
}
