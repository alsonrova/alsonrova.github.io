import IconEmoji from "./components/IconEmoji"
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiFileCSharpDuotone } from "react-icons/pi";

function OverallSkillsPage() {
  const LANGUAGE = [
    {
      name:"Javascript",
      icon: <IoLogoJavascript />,
      level: 5
    },
    {
      name:"Typescript",
      icon: <SiTypescript />,
      level: 4
    },
    {
      name:"PHP",
      icon: <SiPhp />,
      level: 4
    },
    {
      name:"Java",
      icon: <FaJava />,
      level: 2
    },
    {
      name:"C#",
      icon: <PiFileCSharpDuotone />,
      level: 2
    },
    
  ]
  const hyu = "<h1>My Project</h1>"
  return (
    <div className="w-screen h-full flex relative ">
        <div className="w-full absolute h-full z-20 flex flex-wrap lg:justify-start justify-center gap-4 p-10 px-1 lg:px-40">
          <div className="lg:basis-1/3 basis-3/4 bg-slate-900 shadow-lg  hover:shadow-slate-100/10 transition-shadow flex flex-col flex-wrap ">
            <h2 className="uppercase w-full text-xl">PRINCIPAUX SKILLS</h2>
            <IconEmoji rate={4} text={"FRONT END"}/>
            <IconEmoji rate={3} text={"BACK END"}/>
            <IconEmoji rate={3} text={"GESTION DE BASE DE DONNEES"}/>
            <IconEmoji rate={2} text={"DEV OPS"}/>
            <IconEmoji rate={3} text={"GESTION DE PROJETS"}/>
            <IconEmoji rate={3} text={"ARCHITECTURE"}/>
            <IconEmoji rate={1} text={"GRAPHISME"}/>
          </div>
          <div className="lg:basis-1/3 basis-3/4 bg-slate-900 shadow-lg  hover:shadow-slate-100/10 transition-shadow">
            <h2 className="uppercase text-xl">
              Languages de prédilection :
            </h2> 
            <ul>
              {LANGUAGE.map((item)=>{
                return <li className="flex items-center gap-1" style={{fontSize: item.level*9.3}}>{item.icon}{item.name}</li>
              })}
            </ul>    
          </div>
          <div className="lg:basis-1/6 basis-3/4 h-20 bg-slate-900 shadow-lg  hover:shadow-slate-100/10 transition-shadow"></div>
          <div className="lg:basis-2/5 basis-3/4 h-20 bg-slate-900 shadow-lg  hover:shadow-slate-100/10 transition-shadow"></div>
          <div className="lg:basis-2/5 basis-3/4 h-20 bg-slate-900 shadow-lg  hover:shadow-slate-100/10 transition-shadow">
            <h2>DevOPS</h2>
            
          </div>


          

        </div>
        <div className="w-full fixed h-full z-10 px-5">
          <div className="bg-black h-40 w-56 -skew-y-12 rounded-md shadow-lg opacity-40">
            {hyu}
          </div>
          <div className="absolute top-100 right-2 bg-black h-40 w-56 -skew-y-12 rounded-md shadow-lg opacity-40">
            {hyu}
          </div>
        </div>
        
    </div>
  )
}
export default OverallSkillsPage