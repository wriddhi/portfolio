import React from 'react'
import styles from '../styles/Skills.module.css'

import { SiReact, SiNextdotjs, SiPhp, SiHtml5, SiCss3, SiJavascript, SiJava, SiGit,
         SiFirebase, SiMysql, SiMongodb, SiCplusplus, SiGnubash, SiPython, SiThreedotjs,
         SiNodedotjs, SiBootstrap, SiGooglecloud, SiDigitalocean, SiTailwindcss } from 'react-icons/si'

const Slide = ({name, icon}) => {
    const abbr = name
    return(
        <div className={styles.slide}>
            {icon}
            <span className={styles.title}>{name}</span>
        </div>
    )
}

const Skills = () => {
    // const icons = [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiNextdotjs/>, <SiPhp/>, <SiReact/>, <SiFirebase/>, <SiMysql/>,
    // <SiMongodb/>, <SiCplusplus/>, <SiJava/>, <SiGnubash/>, <SiPython/>, <SiNodedotjs/>, <SiBootstrap/>, <SiDigitalocean/>,
    // <SiTailwindcss/>, <SiGooglecloud/>, <SiThreedotjs/>]

    const icons = {
        'html 5': <SiHtml5/>, 
        'css 3': <SiCss3/>, 
        'JavaScript': <SiJavascript/>, 
        'NextJS': <SiNextdotjs/>, 
        'PHP': <SiPhp/>, 
        'React': <SiReact/>, 
        'Firebase': <SiFirebase/>, 
        'MySQL': <SiMysql/>,
        'MongoDB': <SiMongodb/>, 
        'C++': <SiCplusplus/>,
        'Java':  <SiJava/>,
        'Bash': <SiGnubash/>,
        'Python': <SiPython/>,
        'NodeJs': <SiNodedotjs/>,
        'Bootstrap': <SiBootstrap/>,
        'Digital Ocean':<SiDigitalocean/>,
        'TailwindCSS': <SiTailwindcss/>,
        'Google Cloud Console': <SiGooglecloud/>,
        'Three.js': <SiThreedotjs/>,
        'Git': <SiGit/>
    }

    const about = ``

    return (
        <>
            <div className={styles.about}>
                <h1>&lt;About Me/&gt;</h1>
                <p>Hello! My name is Wriddhi and I enjoy creating things that live on the internet. 
    My interest in web development started back in 2018 where I was first introduced to basic HTML and CSS thriough my school&apos;s cirriculum, 
    and I started to think, if there was any limits to what could be built using it. <br /> <br />
    I&apos;ve only kept learning about web technologies ever since and I&apos;m not stopping anytime soon.
    Below are a few technologies I&apos;m the most comfortable with :</p>
            </div>

            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {Object.entries(icons).map(([name, icon]) => {
                        return <Slide name={name} icon={icon} key={name}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills