import React, { useRef, useEffect, useMemo } from 'react'
import styles from '../styles/Vision.module.css'
import { MdDesignServices, MdSecurity } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import { IoMdRocket } from 'react-icons/io'
import { IoBuild } from 'react-icons/io5'
import { TbVectorTriangle } from 'react-icons/tb'

const Vision = ({vision}) => {

  const visionRef = useRef(null)
  const h1Ref = useRef(null)
  const pRef = useRef(null)
  const pyramidRef = useRef(null)

  const animate = (entries) => {
    const [entry] = entries
    const visible = entry.isIntersecting
    
    if(visible) {
      h1Ref.current.style.opacity = 1;
      h1Ref.current.style.translate= "0 0";
      pRef.current.style.opacity = 1;
      pRef.current.style.translate= "0 0";
      pyramidRef.current.style.opacity = 1;
      pyramidRef.current.style.translate= "0 0";
    } else {
      h1Ref.current.style.opacity = 0;
      h1Ref.current.style.translate= "-100% 0";
      pRef.current.style.opacity = 0;
      pRef.current.style.translate= "-100% 0";
      pyramidRef.current.style.opacity = 0;
      pyramidRef.current.style.translate= "-100% 0";
    }
  }

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.75
    }
  }, [])

  useEffect(() => {

    const observer = new IntersectionObserver(animate, options)
    visionRef.current

    if(visionRef.current) {
      observer.observe(visionRef.current)
    }
    
    return () => {
      if(visionRef.current) {
        observer.unobserve(visionRef.current)
      }
    }
  }, [visionRef, options])
  
  
  return (
    <main className={styles.visionContainer} id="vision" ref={vision}>
        <section className={styles.vision} ref={visionRef}>
          <h1 ref={h1Ref}>Vision <TbVectorTriangle/> </h1>
          <p ref={pRef}>
            After building countless apps, at each step it&apos;s only become clearer that
            <br />
            I&apos;m only at the tip of the <i>Web Iceberg</i> and
            <br />
            there&apos;s always more to learn. So <i>4</i> more years later,
            <br />
            I will still be looking forward to the realisation that there&apos;s even more to learn as the web keeps growing
          
          </p>
          <ul ref={pyramidRef} className={styles.pyramid}>
            <b>
              <li><MdDesignServices className={styles.pyramidLogo}/>Desinging</li>
              <li><FaCode className={styles.pyramidLogo}/>Building prototype</li>
              <li><IoMdRocket className={styles.pyramidLogo}/>Improving performance and deploying</li>
              <li><MdSecurity className={styles.pyramidLogo}/>Penetration testing security issues</li>
              <li><IoBuild className={styles.pyramidLogo}/>Maintaining the infrastructure and improving</li>
            </b>
          </ul>
        </section>
    </main>
  )
}

export default Vision
