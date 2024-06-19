import React from 'react'
import Styles from './Contact.module.css'
import getImageUrl from '../../utils'

function Contact() {
  return (
    <footer className={Styles.container} id='contact'>
        <div className={Styles.text}>
            <h2 className={Styles.title}>Contact</h2>
            <p className={Styles.description}>Feel free to reach out!</p>
        </div>
        <ul className={Styles.links}>
            <li className={Styles.link}>
                <img 
                src={getImageUrl('contact/emailIcon.png')}
                alt="email icon" />
                <a 
                href="mailto:sg133311@gmail.com"
                >sg133311@gmail.com</a>
            </li>
            <li className={Styles.link}>
                <img 
                src={getImageUrl('contact/githubIcon.png')}
                alt="github icon" />
                <a 
                href="https://github.com/spicron"
                >Shubh@m Gupt@</a>
            </li>
            <li className={Styles.link}>
                <img 
                src={getImageUrl('contact/linkedinIcon.png')}
                alt="linkedin icon" />
                <a 
                href="https://www.linkedin.com/in/shubham-gupta-64601b195/"
                >shubham-gupta</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact