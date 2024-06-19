import React from 'react'
import Styles from './Experience.module.css'
import getImageUrl from '../../utils';
import skills from '../../data/skills.json'
import experiences from '../../data/experience.json'

function Experience() {
  return (
   <section className={Styles.container} id='experience'>
    <h2 className={Styles.title}>Experience</h2>
      <div className={Styles.content}>
            <div className={Styles.skills}>
                {
                        skills.map((skill, id) => {
                            return (
                                <div key={id} className={Styles.skill}>
                                <div className={Styles.skillImageContainer}>
                                    <img
                                    src={getImageUrl(skill.imageSrc)}  
                                    alt={`${skill.title} image`}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                            );
                        })
                }
            </div>
          <ul className={Styles.history}>
               {
                    experiences.map((exp , id)=>{
                        return (
                                    <li key={id} className={Styles.experiencesItem}>
                                                    <img 
                                                    src={getImageUrl(exp.imageSrc)}
                                                    alt={`${exp.organisation}image`} 
                                                    />
                                                <div className={Styles.expItemDetails}>
                                                    <h3>{`${exp.role },${exp.organisation}`}</h3>
                                                    <p>{`${exp.startDate}-${exp.endDate}`}</p>
                                                    <ul>
                                                        {exp.experiences.map((data ,id) =>{
                                                            return <li key={id}>{data}</li>
                                                        })}
                                                   </ul>
                                                </div>
                                    </li>
                                );
                    })
                }
           </ul>
    
      </div>
  
   </section>
  )
}

export default Experience