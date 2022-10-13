import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/WHlogo.ico" />
      </Head>
      <Navbar/>
        <h1 style={{color: 'var(--accent-bright)', fontSize: '4rem', textAlign: 'center', margin: '15rem 0'}}>&lt; Error 404 : Page not Found /&gt;</h1>
      <Footer/>
    </>
  )
}
