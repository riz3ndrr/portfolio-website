
import fishBodyImg from "../../../public/assets/fish-body.png" 
import fishTailImg from "../../../public/assets/fish-tail.png" 
import sharkBodyImg from "../../../public/assets/shark-body.png" 
import sharkTailImg from "../../../public/assets/shark-tail.png"
import githubLogo from "../../../public/assets/github-mark.png"
import {useMemo} from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {RevealOnScroll} from "../RevealOnScroll"

export const Home = () => {
  return ( 
    <RevealOnScroll>
    <div id="#home" className = "z-40">
      <div className = "flex flex-col justify-center items-center absolute top-1/2 w-screen">
        <Title/>
        <SubTitle className = "z-0"/>
        <ContactBar/>
      </div>
      <div className="relative h-screen w-screen text-4xl overflow-hidden z-10">
        <School upperY = {30} lowerY = {5} isSlow = {true} isSmall= {true} body = {fishBodyImg} tail = {fishTailImg} amount = {30} widthBoundaries = {[9, 7]} heightFactor = {2 / 3}/>
        <School upperY = {45} lowerY = {45} isSlow = {true} isSmall= {false} body = {sharkBodyImg} tail = {sharkTailImg} amount = {1} widthBoundaries = {[50, 40]} heightFactor = {5 / 11}/>
      </div>
  </div>
    </RevealOnScroll>
  )
}


export const SubTitle = () => {
  return (
    <h2 className = "text-2xl sm:text-4xl font-mono font-bold" >Final Year Computer Science Student</h2>

  )
}

const ContactBar = () => {
  const iconSize = 50
  return (
    <div className = "relative flex flex-row z-70 justify-center gap-5 pt-5 px-2">
      <a href="https://github.com/riz3ndrr" target="_blank">
        <FaGithub size={iconSize} className = "hover:-translate-y-1 transition cursor-pointer"/>
      </a>
      <a className ="sm:text-4xl text-xl bg-blue-900 rounded-xl p-2 cursor-pointer hover:-translate-y-1 transition" href="#contact" >Want to get in touch?</a>
      <a href="https://www.linkedin.com/in/dwyane-ramos/" target="_blank">
        <FaLinkedin size={iconSize} className = "hover:-translate-y-1 transition cursor-pointer"/>
      </a>
    </div>
  )
}

export const Title = ({opacityClass}) => {
  const firstNameChars = "Dwyane".split("")
  const lastNameChars = "Ramos".split("")
  return (
  <h1 className={` flex flex-row gap-8 justify-center ${opacityClass}  text-5xl  z-70 text-center font-mono font-bold md:text-8xl`}>
      <div className = "flex flex-row">
        {
          firstNameChars.map((c, idx) => {
            return (
              <div key = {idx} className = "animate-wavy-text" style = {{"--wave-delay" : `${idx * 0.1}s`}}>
                {c}
              </div>
            )

          })
        }
      </div>
      <div  className = "flex flex-row">
        {
          lastNameChars.map((c, idx) => {
            return (
              <div key = {idx} className = "animate-wavy-text" style = {{"--wave-delay" : `${idx * 0.1 + 0.1 * firstNameChars.length}s`}}>
                {c}
              </div>
            )

          })
        }
      </div>


  </h1>
  )
}


function School({upperY, lowerY, isSlow, isSmall, body, tail, amount, widthBoundaries, heightFactor}) {
  const upperWidth = widthBoundaries[0];
  const lowerWidth = widthBoundaries[1];
  
  const speedBoundaries = isSlow ? [20, 22] : [6, 7];
  const upperSpeed = speedBoundaries[1];
  const lowerSpeed = speedBoundaries[0];

  const fish = Array.from({length : amount}).map((_, index) => {
      
      const stats = useMemo(() => {
          const width = Math.round(Math.random() * (upperWidth - lowerWidth)) + lowerWidth;
          return {

          top : Math.random() * (upperY - lowerY) + lowerY,
          left : Math.random() * (100 - 20) + 20,
          width : width,
          height : width * heightFactor,
          speed : Math.random() * (upperSpeed - lowerSpeed) + lowerSpeed
           
        };
      }, [])
      

      /**const isSlow = Math.round(Math.random());**/

      return (
      <div key = {index}
          className="absolute w-screen h-screen"
          style = {{
            top: `${stats.top}%`,
            left: `${stats.left}%`,
          }}>
      
        <div className="animate-whole-fish-movement"
             style = {{
            "--duration": `${stats.speed}s`
          }}>
          
          <img src={body} alt="fish body" 
              className="absolute"
              style ={{
                width: `${stats.width}rem`,
                height: `${stats.height}rem`,
            }}
          />
          <img src={tail} alt="fish Tail"
              className="absolute animate-fish-tail-movement"
              style ={{
                width: `${stats.width}rem`,
                height: `${stats.height}rem`,
                "--tail-duration": `${stats.speed/7}s` 
            }}
          />
        </div>

      </div>
      )
    }); 

  return <div className ="absolute w-full h-full">{fish}</div>;
}
