import {LoadingScreen} from "./components/LoadingScreen" 
import {Navbar} from "./components/Navbar"
import {MobileMenu} from "./components/MobileMenu"
import {Home, Title} from "./components/sections/Home"
import {About} from "./components/sections/About" 
import {Projects} from "./components/sections/Projects"
import {Contact} from "./components/sections/Contact"
import "./index.css"
import {useState, useEffect} from "react";




function App() {
  const [isLoaded, setIsLoaded ] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/*!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)} />*/}
      {/*<Title opacityClass={`${isLoaded ? "opacity-100" : "opacity-0"}`}/>*/}
      
      <div className = {`min-h-screen 
        transition-opacity duration-800 ${isLoaded ? "opacity-100": "opacity-0"} text-gray-100`}>
        <Home/>
        {/*<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>*/}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <About/>
        <Projects/>
        <Contact/>

      </div>
    </>
  )
}

export default App
