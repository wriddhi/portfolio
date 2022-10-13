import React from 'react'
import styles from '../styles/Contact.module.css'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { FaChevronCircleRight } from 'react-icons/fa'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h1>&lt; Contact Me /&gt;</h1>
        <span className={styles.contactInfo}>
            <AiOutlineGithub className={styles.contactIcon}/>
            <p>wriddhi</p>
            <Link href='https://github.com/wriddhi/'><a target='_blank'><FaChevronCircleRight/></a></Link>
        </span>
        <span className={styles.contactInfo}>
            <AiFillLinkedin className={styles.contactIcon}/>
            <p>wriddhi-hazra</p>
            <Link href='https://www.linkedin.com/in/wriddhi-hazra/'><a target='_blank'><FaChevronCircleRight/></a></Link>
        </span>
        <span className={styles.contactInfo}>
            <AiOutlineMail className={styles.contactIcon}/>
            <p>wriddhihazra@gmail.com</p>
            <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=wriddhihazra@gmail.com'><a target='_blank'><FaChevronCircleRight/></a></Link>
        </span>
        <span className={styles.contactInfo}>
            <AiOutlineMobile className={styles.contactIcon}/>
            <p>+919830075679</p>
            <Link href='tel:+919830075679'><a><FaChevronCircleRight/></a></Link>
        </span>
    </div>
  )
}

export default Contact