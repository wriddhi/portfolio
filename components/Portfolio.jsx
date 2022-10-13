import Image from 'next/image'
import React from 'react'
import styles from '../styles/Portfolio.module.css'
import Button from './Button'

const Portfolio = () => {

  return (
    <div className={styles.portfolio}>
      <h1>&lt; Portfolio /&gt;</h1>
      <div className={styles.image}>
        <Image
        src={'/resume.png'}
        layout='fill'
        />
      </div>
      <a href='Wriddhi Hazra - Resume.pdf' target='_blank' download><Button value='DOWNLOAD' color='bright' action={null}/></a>
    </div>
  )
}

export default Portfolio