import ProjectBackgroundFragment from "./ProjectBackgroundFragment"

function ProjectBackground() {
    const srcArray = [
        "../../src/assets/api.png",
        "../../src/assets/crm.png",
        "../../src/assets/domaine.png",
        "../../src/assets/livre-ouvert.png",
        "../../src/assets/outils-de-conception.png",
        "../../src/assets/curseur.png",
        "../../src/assets/balise-seo.png",
        "../../src/assets/balise-html.png",
        "../../src/assets/deploiement.png",
        "../../src/assets/fusee.png",
        "../../src/assets/aspect-visuel.png",
        "../../src/assets/direction.png",
    ]
  return (
    <div className="w-full fixed h-screen top-40 overflow-hidden flex gap-5 flex-wrap justify-start items-start"
        >
        {Array.from({ length: 100 }).map((_, index) => (
                <ProjectBackgroundFragment 
                    key={index} 
                    src={srcArray[Math.floor(Math.random() * srcArray.length)]} 
                />
            ))}
    </div>
  )
}
export default ProjectBackground