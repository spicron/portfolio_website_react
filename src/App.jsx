import  Style from'./App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Hero from './components/hero/Hero';





function App() {


  return(

    <div className = {Style.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      

    </div>

  ) ;
}

export default App
