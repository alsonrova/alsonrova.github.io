import ProjectCard from "./ProjectCard"

function ProjectList() {
  return (
    <div className="flex flex-wrap lg:p-20 p-10 gap-20 justify-center z-20">
        <ProjectCard title="Investissement Locatif" />
        <ProjectCard title="MathPrepa" image/>
        <ProjectCard title="R2C Association" image/>
        <ProjectCard title="NextJob"/>
        <ProjectCard title="FastPizza"/>
        <ProjectCard title="My Lit"/>
        <ProjectCard title="My portfolio"/>
        <ProjectCard title="Alliance Francaise"/>

    </div>
  )
}
export default ProjectList