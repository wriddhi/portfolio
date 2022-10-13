import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '../styles/Footer.module.css'


const Footer = () => {

  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
            <Link href={'/'}>
                <Image
                src="/WHlogo.png"
                alt="Logo"
                width={20}
                height={20}
                className={styles.logoImg}
                />
            </Link>
            <Link href={'/'}>
                <span className={styles.logo}> Wriddhi<b>Hazra</b></span>
            </Link>
            </div>
            <h3>QUICK LINKS</h3>
            <section className={styles.links}>
                <Link href={'/'}>Home</Link> | 
                <Link href={'/about'}>About</Link> | 
                <Link href={'/projects'}>Projects</Link> | 
                <Link href={'/portfolio'}>Portfolio</Link> | 
                <Link href={'/contact'}>Contact</Link>
            </section>
            <div className={styles.copyright}>
                Copyright &copy; 2022 WRIDDHI HAZRA
            </div>
        </footer>
    
    </>
  )
}

export default Footer