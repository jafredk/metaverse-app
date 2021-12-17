import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />

    </div>
  )
}
