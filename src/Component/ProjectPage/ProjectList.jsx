import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import Project from "../../utils/Project"


function ProjectList() {
  
  const [selector, setSelector] = useState(0)
  const [showModal,setShowModal] = useState(false)

  useEffect(()=>{
    console.log(showModal)
  },[showModal])

  return (
    <>
      <div className="flex flex-wrap lg:p-20 p-10 gap-20 justify-center z-20">
        {Project.map((project,index)=>{
          return <ProjectCard title={project.title} id={project.id} isShow={showModal} image= {project.image} setIsShow={setShowModal} selector={setSelector}/>
        })}
        {/* <ProjectCard title="R2C Association" image/>
        <ProjectCard title="NextJob"/>
        <ProjectCard title="FastPizza"/>
        <ProjectCard title="My Lit"/>
        <ProjectCard title="My portfolio"/>
        <ProjectCard title="Alliance Francaise"/> */}
      </div>
      <ProjectModal project={Project[selector]} isShow={showModal} setIsShow={setShowModal} />
    </>   
  )
}
export default ProjectList