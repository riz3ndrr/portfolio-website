import fishBodyImg from "../../public/assets/fish-body.png" 
import fishTailImg from "../../public/assets/fish-tail.png" 
import sharkBodyImg from "../../public/assets/shark-body.png" 
import sharkTailImg from "../../public/assets/shark-tail.png" 
import {useMemo} from "react";
import {RevealOnScroll} from "./RevealOnScroll"

export const HomeBG = () => {
  return ( 
    <RevealOnScroll>
    <div id="#home" className = "z-40">
      <SubTitle/>
      <div className="relative h-screen w-screen text-4xl overflow-hidden">
        <School upperY = {30} lowerY = {5} isSlow = {true} isSmall= {true} body = {fishBodyImg} tail = {fishTailImg} amount = {30} widthBoundaries = {[9, 7]} heightFactor = {2 / 3}/>
        <School upperY = {45} lowerY = {45} isSlow = {true} isSmall= {false} body = {sharkBodyImg} tail = {sharkTailImg} amount = {1} widthBoundaries = {[50, 40]} heightFactor = {5 / 11}/>
      </div>
  </div>
    </RevealOnScroll>
  )
}


export const SubTitle = () => {
  return (
  <h2 className = "text-4xl font-mono font-bold absolute right-[25vw] w-[50vw] overflow-auto top-[60vh] text-center" >Final Year Computer Science Student</h2>

  )

}
export const Title = ({opacityClass}) => {
  return (
  <h1 className={` ${opacityClass} text-8xl w-screen z-70 absolute text-center top-1/2 font-mono font-bold`}>John Smith</h1>
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
          className="absolute w-screen h-screen z-60"
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
