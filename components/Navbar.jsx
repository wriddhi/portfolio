import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Button from './Button'
import Image from 'next/image'


function FullNav({navRef}) {

  const router = useRouter()


  const contact = () => {
    router.push('/contact')
  }

  return (
    <header className={styles.header} ref={navRef}>
      <div className={styles.logoContainer}>
        <Link href={'/'}>
          <Image
            src="/WHlogo.png"
            alt="Logo"
            width={35}
            height={35}
            className={styles.logoImg}
          />
        </Link>
        <Link href={'/'}>
          <span className={styles.logo}> Wriddhi<b>Hazra</b></span>
        </Link>
      </div>
      
      <Link href={'/about'}><span className={styles.link} id="about">About</span></Link>
      <Link href={'/projects'}><span className={styles.link} id="projects">Projects</span></Link>
      <Link href={'/portfolio'}><span className={styles.link} id="portfolio">Portfolio</span></Link>
      {/* <Link href={'/skills'}><span className={styles.link} id="skills">Skills</span></Link> */}
      {/* <Link href={'/blogs'}><span className={styles.link}>Blogs</span></Link> */}
      <Button value="Contact Me" color="bright" action={contact}/>
      {/* <Button value="Contact" color="dull" action={contact} /> */}
    </header>
  )

}

function HamNav({navRef}) {
  return (
    <header className={styles.header} ref={navRef}>
      <div className={styles.logoContainer}>
        <Link href={'/'}>
          <Image
            src="/WHlogo.png"
            alt="Logo"
            width={35}
            height={35}
            className={styles.logoImg}
          />
        </Link>
        <Link href={'/'}>
          <span className={styles.logo}> Wriddhi<b>Hazra</b></span>
        </Link>
      </div>
      <HamIcon/>
    </header>
  )
}


function HamIcon() {
  return(
    <div className={styles.hamIcon}>
      <span className={`${styles.hambar} ${styles.tophambar}`}></span>
      <span className={`${styles.hambar} ${styles.midhambar}`}></span>
      <span className={`${styles.hambar} ${styles.bottomhambar}`}></span>
    </div>
  )
}

function Header() {

  const [width, setWidth] = useState(null)

  const router = useRouter()
  const navRef = useRef(null)


  useEffect(() => {
      if(!navRef || !navRef.current) {
        return
      }
      const links = navRef.current.getElementsByClassName(`${styles.link}`)

      for(const link in links) {
        const id = links[link].id
        if(links[link] && id) {
          if('/'+id == router.pathname){
            links[link].classList.add(`${styles.active}`)
          }
        }
      }
  }, [navRef.current])
  
  useEffect(() => {
    if(window && typeof(window)!==undefined){
      setWidth(window.innerWidth)
    }
  }, [width])

  if(width > 1000) {
    return (
      <FullNav navRef={navRef}/>
    )
  } else {
    return (
      <HamNav navRef={navRef}/>
    )
  }
}

export default Header

// portfolio.1903.Server