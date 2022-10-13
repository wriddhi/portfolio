import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Landing.module.css'
import Button from './Button'

const Vision = dynamic(() => import('./Vision'), {
  ssr: false,
})


const Intro = ({translate, introRef}) => {

  // console.log(innerRef.current)
  return(
    <section className={styles.content} ref={introRef} style={{transform: `translateX(${translate}%)`}}>
      <div className={styles.text}>
        <div className={styles.typewriter}>
          <h1>&lt;Hey, I&apos;m Wriddhi/&gt;</h1>
        </div>
        <p>I&apos;m a <i>full-stack</i> web developer.
          <br />
          <br />
          <br />
          I mostly work with the <i>MERN</i> stack <br />
          and the <i>LAMP</i> stack.
          <br />
          <br />
          <br />
          I also work a lot with <i> REST APIs</i>.<br />
        </p>
        <Button value="CONTACT ME" color="full" action={null}/>
      </div>
      <div className={styles.image}>
        <div className={styles.frame}>
          <Image
            className={styles.myImg}
            src="/Me.png"
            alt="Wriddhi"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

const Journey = ({translate, journeyRef}) => {
  return(
    <section className={styles.content} ref={journeyRef} style={{transform: `translateX(${translate}%)`}}>
      <div className={styles.journey}>
        <h1>&lt;Journey/&gt;</h1>
        <p>
          I&apos;m from <i>Kolkata</i>, India.
          <br />
          <br />
          I started my journey in programming in <i>2019</i>.
          <br />
          Still improving my skills and knowledge about the domain
          <br />
          while enjoying every step and being <i>amazed</i> by how the <i>web</i> works.
          <br />
          <br />
          Even <i>4</i> years later.
        </p>
        <div className={styles.journeyAnimation}>
          <span className={styles.journeyProgress}></span>
          <span className={styles.journeyYears}></span>
          <span className={styles.journeyYears}></span>
          <span className={styles.journeyYears}></span>
          <span className={styles.journeyYears}></span>
        </div>
      </div>
    </section>
  )
}

const Continue = ({translate, continueRef, visionContainerRef}) => {

  const showVision = () => {
    visionContainerRef.current.scrollIntoView({behavior: "smooth"})
  }

  return(
    <section className={styles.content} ref={continueRef} style={{transform: `translateX(${translate}%)`}}>
      <div className={styles.journey}>
        <h1>&lt;Continue/&gt;</h1>
        <p>
          Learn <i>more</i> about me.
        </p>
        <Link href="#vision">
          <Button color="full" value="Continue" action={showVision}/> 
        </Link>
      </div>
    </section>
  )
}

const Progress = ({crossed}) => {
  // console.log(crossed)
  if(crossed) {
    return (
      <span className={styles.progress}>
        &#9899;
      </span>
    )
  } else {
    return (
      <span className={styles.progress}>
        &#9898;
      </span>
    )
  }
}

const Landing = () => {
  const [progress,  setProgress] = useState(0)
  const [ x, setX ] = useState(0)

  const introRef = useRef(null)
  const journeyRef = useRef(null)
  const continueRef = useRef(null)
  const visionContainerRef = useRef(null)
  
  const sliders = [1, 2, 3]
  const size = sliders.length

  const handleProgress = (forward=true) => {

      // console.log("Handling carousal")

      if(forward && progress==size-1){
          setProgress(0)
          setX(0)
      } else if(!forward && progress==0) {
          setProgress(size-1)
          setX(-(size-1)*100)
      } else {
          if(forward) {
              setProgress(progress+1)
              setX(x-100)
          }
          else {
              setProgress(progress-1)
              setX(x+100)
          }
      }
  }

  return (
    <>
        <section className={styles.carousel}>
            <span className={styles.left} onClick={() => handleProgress(false)}>&larr;</span>
            <div className={styles.viewer}>
                <Intro translate={x} innerRef={introRef}/>
                <Journey translate={x} innerRef={journeyRef}/>
                <Continue translate={x} innerRef={continueRef} visionContainerRef={visionContainerRef}/>
            </div>
            <span className={styles.right} onClick={() => handleProgress(true)}>&rarr;</span>
            <div className={styles.progressDots}>
                {sliders.map((slide, index) => {
                    return <Progress key={index} crossed={index==progress} id={index}/>
                })}
            </div>
        </section>

        <Vision vision={visionContainerRef}/>
    </>
  )
}

export default Landing