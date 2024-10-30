import ProjectBackgroundFragment from "./ProjectBackgroundFragment"
import apiImage from "../../src/assets/api.png";
import crmImage from "../../src/assets/crm.png";
import domaineImage from "../../src/assets/domaine.png";
import livreOuvertImage from "../../src/assets/livre-ouvert.png";
import outilsImage from "../../src/assets/outils-de-conception.png";
import curseurImage from "../../src/assets/curseur.png";
import baliseSeoImage from "../../src/assets/balise-seo.png";
import baliseHtmlImage from "../../src/assets/balise-html.png";
import deploiementImage from "../../src/assets/deploiement.png";
import fuseeImage from "../../src/assets/fusee.png";
import aspectVisuelImage from "../../src/assets/aspect-visuel.png";
import directionImage from "../../src/assets/direction.png";

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