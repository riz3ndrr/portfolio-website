import {RevealOnScroll} from "../RevealOnScroll"

export const About = () => {
  const programmingLanguages = ["Python", "C", "Java", "JavaScript", "Bash", "SQL"];
  const tools = ["React", "Git", "Linux", "JavaFX", "JUnit", "NVim", "TailwindCSS", "Pandas", "APIs", "Vite"];
  const courses = ["DSA", "Software Engineering", "Embedded Systems", "Computer Architecture",
    "AI", "Networks", "Compilers", "Discrete Maths", "Cryptography", "Databases"];
  const languages = ["English", "Tagalog", "Spanish"]

  return (
    <RevealOnScroll>
    <section id = "about" className = "relative min-h-screen h-auto py-20 flex items-center justify-center">


      <div className = "max-w-5xl mx-auto px-4">
        <h2 className = "text-5xl font-bold text-center font-mono mb-8 text-white">About Me</h2>

        <div className = "rounded-xl bg-[#021738] p-8 border-white/10 border hover:-translate-y-1 transition-all my-5">
          <div>
            <h3 className = "text-2xl font-bold mb-4">Education</h3>
            <h4 className ="text-xl font-bold">University of Canterbury</h4>
            <p>BSc, Majoring in Computer Science (8.94 GPA)</p>
            <p>Expected Graduation Date: End of 2026</p>
          </div>

          <div className = "my-5">
            <h4 className = "text-xl font-bold">Relevant Coursework</h4>
            <div className = "flex flex-wrap gap-2">
              {courses.map((course, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                  {course}
                  </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className = "rounded-xl p-8 border-white/10 bg-[#021738] border hover :-translate-y-1 transition-all">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className = "rounded-xl p-3 hover:-translate-y-1 transition-all">
              <h3 className = "text-2xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                {tech}
                  </span>
                  ))}
                  
                </div>
              
            </div>
              
            <div className = "rounded-xl p-3 hover:-translate-y-1  transition-all">
              <h3 className = "text-2xl font-bold mb-4">Tools and Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                {tech}
                  </span>
                  ))}
                  
                </div>
            </div>
            <div className = "rounded-xl p-3 hover:-translate-y-1 transition-all">
              <h3 className = "text-2xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                {lang}
                  </span>
                  ))}
                  
                </div>
            </div>
          </div>
        </div>
  
        <div className = "rounded-xl bg-[#021738] p-8 border-white/10 border hover:-translate-y-1 transition-all my-5">
          <h3 className = "text-2xl font-bold mb-4">Work Experience</h3>
          <div className = "flex flex-col gap-3">
            <div>
              <h4 className ="text-xl font-bold">Picker / Packer</h4>
              <p className="mb-3">Dec 2025 - Feb 2026</p>
              <p>Prepared shipments for back-to-school orders</p>
            </div>

            <div>
              <h4 className ="text-xl font-bold">Mathematics Tutor</h4>
              <p className="mb-3">Sept 2023 - Present</p>
              <p>Attended to students' needs, and explaining complex topics clearly to students, ranging from year 2 to 13, from various education levels and upbringing</p>
            </div>

            <div >
              <h4 className ="text-xl font-bold">Sales Assistant</h4>
              <p className="mb-3">Dec 2021 - Dec 2022</p>
              <p>Actively engaged with customers and responsible for opening/closing of the store</p>
            </div>
          </div>
        </div>
        



      </div >
  
    </section>
    </RevealOnScroll>
  )
}
