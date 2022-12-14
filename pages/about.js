import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/WHlogo.ico" />
      </Head>
      <Navbar/>
      <Skills/>
      <Footer/>
    </>
  )
}
