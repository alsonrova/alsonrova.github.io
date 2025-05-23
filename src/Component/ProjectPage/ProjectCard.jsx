import { motion } from "framer-motion"
import ProjectModal from "./ProjectModal"
function ProjectCard({id,title,url,status,description,image,icon,isShow, setIsShow,selector
}) {
  function showModal(){
    selector(id)
    setIsShow(true)
  }
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}  
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}      
    whileHover={{ scale: 1.1 }}
    onClick={()=>showModal()}
    className="w-[290px] min-h-[380px] bg-slate-300/30 rounded-xl overflow-hidden flex flex-col items-center z-20 drop-shadow-md backdrop-blur-sm"
    >
        <div className="w-full h-[140px] overflow-hidden object-contain">
            <img src={image} className="h-full w-full object-cover object-top"/>
        </div>
        <h1>{title}</h1>
        <h2
        >More details</h2>
        <p>

        </p>
    </motion.div>
  )
}
export default ProjectCard