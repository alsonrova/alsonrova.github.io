import ProjectBackground from "./ProjectPage/ProjectBackground"
import ProjectHeader from "./ProjectPage/ProjectHeader"
import ProjectList from "./ProjectPage/ProjectList"

function ProjectPage() {
  return (
    <div className="w-full">
        <ProjectHeader />
        <ProjectList />
        <ProjectBackground />
    </div>
  )
}
export default ProjectPage