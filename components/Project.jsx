import React from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import Button from './Button'
import projects from '../projects.json'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

const Card = ({photo, title, description, url}) => {
    // console.log(url)
    // const action = (url) => {
    //     Router.push('www.facebook.com')
    // }
    return(
        <div className={styles.card}>
            <span className={styles.cardImage}>
                <Image
                src={photo}
                alt="Image"
                layout='fill'
                className={styles.cardImg}
                />
            </span>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDesc}>{description}</p>
            <Link href={url}>
                <a target='_blank'><Button color="bright" value="SEE MORE"/></a>
            </Link>
        </div>
    )
}

const Project = () => {

    const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolore pariatur repellat voluptatibus dignissimos ex hic, ut voluptate expedita enim dolor soluta, eos aperiam maiores, necessitatibus modi dolorem autem. Quo!"
    return (
        <div className={styles.projectsContainer}>
            {projects.map((project, index) => {
                return (
                    <Card key={index} photo={project.photoUrl} title={project.title} description={project.description} url={project.link}/>
                )
            })}

        </div>
    )
}

export default Project