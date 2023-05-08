import Head from 'next/head'

export default function CustomHead ({ section }: { section: string }) {
  return (
    <Head>
      <title>{`El Buen Sabor | ${section}`}</title>
      <meta name='description' content='Final project UTN rework' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/logo.png' />
    </Head>
  )
}
