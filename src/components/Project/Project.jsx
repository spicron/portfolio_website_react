import React from 'react'
import Styles from './Project.module.css'
import project from '../../data/projects.json'
import ProjectCard from './ProjectCard'


function Project() {
  return (
      <section className={Styles.container} id='project'>
        <h2 className={Styles.title}>Project</h2>
        <div className={Styles.projects}>
            {
                project.map((project , id)=>{
                    return <ProjectCard key={id} project = {project}/>
                })
            }
        </div>
      </section>
  )
}

export default Project