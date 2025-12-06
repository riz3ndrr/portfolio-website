import fishBodyImg from "../assets/fish-body.png" 
import fishTailImg from "../assets/fish-tail.png" 
import sharkBodyImg from "../assets/shark-body.png" 
import sharkTailImg from "../assets/shark-tail.png" 

export const HomeBG = () => {
  return ( 
    <div>
      <SubTitle/>
      <div className="absolute z-60 h-screen w-screen text-4xl overflow-hidden">
        <School upperY = {30} lowerY = {5} isSlow = {true} isSmall= {true} body = {fishBodyImg} tail = {fishTailImg} amount = {20} widthBoundaries = {[9, 7]} heightFactor = {2 / 3}/>
        <School upperY = {50} lowerY = {50} isSlow = {true} isSmall= {false} body = {sharkBodyImg} tail = {sharkTailImg} amount = {1} widthBoundaries = {[40, 30]} heightFactor = {5 / 11}/>
      </div>
  </div>
  )
}


export const SubTitle = () => {
  return (
  <h2 className = "text-4xl font-mono font-bold absolute right-[25vw] w-[50vw] overflow-auto top-[60vh] text-center" >Final Year Computer Science Student</h2>

  )

}
export const Title = () => {
  return (
  <h1 className="text-8xl w-screen absolute text-center top-1/2 font-mono font-bold">John Smith</h1>
  )
}


function School({upperY, lowerY, isSlow, isSmall, body, tail, amount, widthBoundaries, heightFactor}) {
  const upperWidth = widthBoundaries[0];
  const lowerWidth = widthBoundaries[1];
  
  const speedBoundaries = isSlow ? [10, 11] : [6, 7];
  const upperSpeed = speedBoundaries[1];
  const lowerSpeed = speedBoundaries[0];

  const fish = Array.from({length : amount}).map((_, index) => {
      const top = Math.random() * (upperY - lowerY) + lowerY;
      
      console.log(4);
      const left = Math.random() * (50 - 30) + 30;
      const width = Math.round(Math.random() * (upperWidth - lowerWidth)) + lowerWidth;
      const height = width * heightFactor; 
      const speed = Math.random() * (upperSpeed - lowerSpeed) + lowerSpeed;

      /**const isSlow = Math.round(Math.random());**/

      return (
      <div key = {index}
          className="absolute w-screen h-screen z-60"
          style = {{
            top: `${top}%`,
            left: `${left}%`,
          }}>
    
        <img src={body} alt="fish body" 
             className="absolute animate-fish-movement"
             style ={{
              width: `${width}rem`,
              height: `${height}rem`,
              "--duration": `${speed}s` 
          }}
        ></img>
        <img src={tail} alt="fish Tail"
             className="absolute animate-fish-tail-movement"
            style ={{
              width: `${width}rem`,
              height: `${height}rem`,
              "--duration": `${speed}s` 
          }}
        ></img>
      </div>
      )
    }); 

  return <div className ="absolute w-full h-full">{fish}</div>;
}
