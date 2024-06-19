import React from 'react'
import Styles from './About.module.css'
import getImageUrl from '../../utils'

function About() {
  return (
    
    <section className={Styles.container} id="about">
        <h2 className={Styles.title}>About</h2>
        <div className={Styles.content}>
            <img
             className={Styles.aboutImage}
              src={getImageUrl("about/aboutImage.png")}
              alt="about_image"
            />
            <ul className={Styles.aboutItems}>
                <li className={Styles.aboutItem}>
                    <img
                        className={Styles.cursorIcon}
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="cursorIcon Image"
                    />
                    <div className={Styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I’m a front-end developer with experience
                            in building responsive and optimized sites
                        </p>
                    </div>

                </li>
                <li className={Styles.aboutItem}>
                    <img
                        className={Styles.serverIcon}
                        src={getImageUrl("about/serverIcon.png")}
                        alt="serverIcon Image"
                    />
                    <div className={Styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and
                            optimised back-end systems and APIs
                        </p>
                    </div>

                </li>
                <li className={Styles.aboutItem}>
                    <img
                        className={Styles.uiIcon}
                        src={getImageUrl("about/uiIcon.png")}
                        alt="uiIcon Image"
                    />
                    <div className={Styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and
                            have created design systems as well
                        </p>
                    </div>

                </li>
              
            </ul>
        </div>
    </section>
  )
}

export default About