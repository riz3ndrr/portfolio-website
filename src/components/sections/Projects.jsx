import GitHubLogo from "../../../public/assets/github-mark.png"
import projectJson from "./json/projects.json"
import {RevealOnScroll} from "../RevealOnScroll"




const Project = ({image, title, subtitle, desc, github, tech_stack}) => {
    return (
    <RevealOnScroll>
      <div className = "rounded-xl border-white/10 border-1 hover:-translate-y-1 transition grid max py-5 my-3 px-2 grid-cols-1 md:grid-cols-2 gap-6 "> 
        <img src={image} alt="Screenshot of Deadly Fight" className = "rounded-xl hover:scale-105 transition ease-in w-full max-w-lg mx-auto mx-5"/>
          <div className = "relative ">
            <h3 className = "text-3xl  font-mono font-bold underline">{title}</h3>
            <h4 className = "text-2xl font-mono font-bold ">{subtitle} </h4>
            <p>{desc}</p> 


            <a href={github} target = "_blank">
              <img className = "w-12 hover:-translate-y-1 absolute sm:top-0 top-[-1vh] right-5 linear transition" src = {GitHubLogo} alt = "Github link"/>
            </a>

            <h4 className = "text-2xl mt-5 font-mono font-bold">Tech Stack</h4>
            <div className = "flex flex-wrap gap-2 ">
              {tech_stack.map((tech, key) => (
                <span key ={key} className = "bg-blue-500/10 text-blue-200 py-1 px-2 rounded-full text-sm hover:-bg-blue-500/20
                                              hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
              ))}
              
            </div>
          </div>
      </div> 
    </RevealOnScroll>
    )
}


export const Projects = () => {
  const projects = projectJson.projects;
  const projectsDisplayed = projects.map((project, key) => (
      <Project key={key} image = {project.image} title = {project.title} subtitle = {project.subtitle} desc = {project.description} github = {project.github} tech_stack = {project.tech_stack}/>
  ));


  return (
  <RevealOnScroll>
  <section id="projects" className = "pt-30 min-h-screen h-auto relative flex justify-center items-center">
    

    <div className = "max-w-6xl">
      <h2 className = "text-5xl font-mono text-center font-bold text-white">Projects</h2> 
      <div className = "grid">
        {projectsDisplayed}
      </div>
    </div>

  </section>
    </RevealOnScroll>
  )


  
}
