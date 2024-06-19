import React from 'react'
import getImageUrl from '../../utils'
import Styles from './ProjectCard.module.css'

function ProjectCard({project :{title,imageSrc,description,skills,demo,source}}) {
  return (
    <div className={Styles.container}>
                       <img 
                       className={Styles.image}
                       src={getImageUrl(imageSrc)}
                       alt={`${title} image`}
                       />
                       <h2 className={Styles.title}>{title}</h2>
                       <p className={Styles.description}> {description}</p>
                       <ul className={Styles.skills}>
                        {
                          skills.map((skillItmes , id)=>{
                              
                              return  <li 
                                key={id}
                                className={Styles.skill}>
                                   {skillItmes}
                                </li>
                          })
                        }
                       </ul>
                       <div className={Styles.links}>
                                <a href={demo} className={Styles.link}>Demo</a>
                                <a href={source} className={Styles.link}>Source</a>
                       </div>
    </div>
  )
}

export default ProjectCard