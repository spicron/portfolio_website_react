import React from 'react'
import Styles from './Hero.module.css';
import  getImageUrl from "../../utils.js";
import { useTypewriter , Cursor } from 'react-simple-typewriter'


function Hero() {
  const [text] = useTypewriter({
    words : ["Web developer" , "Full stack developer","UI/UX designer"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:50,
  });
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>
           Hi, I’m Shubham 
        </h1>
        <h2 className={Styles.subtitle}>
           I’m a {' '}
          <span>{text}</span>
           <Cursor/>
        </h2>
        <p className={Styles.description}>
          I’m a full-stack developer. Take a look around to see some of my projects and skills in action!.
          Reach out if you’d like to learn more!
        </p>
        <a 
        className={Styles.contactBtn}
        href="mailto:sg133311@gmail.com"
        >Contact Me</a>
      </div>
      <img
       className={Styles.heroImage}
       src={getImageUrl("hero/heroImage.png")} 
       alt="hero_image" />
       <div className={Styles.topBlur}/>
       <div className={Styles.bottomBlur}/>
    </section>
  )
}


export default Hero