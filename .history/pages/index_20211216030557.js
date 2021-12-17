import Head from 'next/head'
import Login from '../components/Login'
import { MoralisProvider } from "react-moralis";

export default function Home() {
    const isAuthenticated = false;

    if (!isAuthenticated) return <Login />


  return (
    <div className="h-screen" >
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to the app</h1>
    </div>
  )
}
