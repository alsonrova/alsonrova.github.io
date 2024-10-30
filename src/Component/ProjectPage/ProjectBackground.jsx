import ProjectBackgroundFragment from "./ProjectBackgroundFragment"
import apiImage from "./assets/api.png";
import crmImage from "./assets/crm.png";
import domaineImage from "./assets/domaine.png";
import livreOuvertImage from "./assets/livre-ouvert.png";
import outilsImage from "./assets/outils-de-conception.png";
import curseurImage from "./assets/curseur.png";
import baliseSeoImage from "./assets/balise-seo.png";
import baliseHtmlImage from "./assets/balise-html.png";
import deploiementImage from "./assets/deploiement.png";
import fuseeImage from "./assets/fusee.png";
import aspectVisuelImage from "./assets/aspect-visuel.png";
import directionImage from "./assets/direction.png";

function ProjectBackground() {
    const srcArray = [
        apiImage,
        crmImage,
        domaineImage,
        livreOuvertImage,
        outilsImage,
        curseurImage,
        baliseSeoImage,
        baliseHtmlImage,
        deploiementImage,
        fuseeImage,
        aspectVisuelImage,
        directionImage,
    ];
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