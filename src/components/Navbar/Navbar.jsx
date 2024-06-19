import React ,{useState}from 'react'
import Styles from './Navbar.module.css';
import  getImageUrl from "../../utils.js";

function Navbar() {
    const [menuOpen ,setMenuOpen]= useState(false)
  return (
        <nav className={Styles.navbar}>
            <a  className={Styles.title} href="/">Shubham Gupta</a>
            <div className={Styles.menu}>
                <img 
                className={Styles.menubtn} 
                src={
                    menuOpen
                    ?getImageUrl("nav/closeIcon.png")
                    :getImageUrl("nav/menuIcon.png")
                } 
                alt="menu-btn"
                onClick={()=>setMenuOpen(!menuOpen
                    )}
                />
                <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}>

                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
            </div>


        </nav>
  )
}

export default Navbar
