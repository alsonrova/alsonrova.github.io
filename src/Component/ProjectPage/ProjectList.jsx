import ProjectCard from "./ProjectCard"
import previewInvestLocatif from "../../assets/investlocatif.png"
import previewMathPrepa from "../../assets/mathprepa.png"

function ProjectList() {
  return (
    <div className="flex flex-wrap lg:p-20 p-10 gap-20 justify-center">
        <ProjectCard title="Investissement Locatif" image={previewInvestLocatif}/>
        <ProjectCard title="MathPrepa" image={previewMathPrepa}/>
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