import './App.css'
import {LoadingScreen} from "./components/LoadingScreen" 
import {Navbar} from "./components/Navbar"
import {HomeBG} from "./components/HomeBG"
import "./index.css"
import {useState, useEffect} from "react";

export const Title = ({opacityClass}) => {
  return (
  <h1 className={` ${opacityClass} text-8xl w-screen red absolute text-center top-1/2 font-mono font-bold`}>John Smith</h1>
  )
}



function App() {
  const [isLoaded, setIsLoaded ] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)} />}
      <Title opacityClass={`${isLoaded ? "opacity-100" : "opacity-0"}`}/>

      <div className = {`min-h-screen 
        transition-opacity duration-800 ${isLoaded ? "opacity-100": "opacity-0"} text-gray-100`}>
       
        <HomeBG/>
        <Navbar />


      </div>
    </>
  )
}

export default App
