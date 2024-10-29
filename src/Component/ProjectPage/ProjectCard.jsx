import { motion } from "framer-motion"
function ProjectCard({title,url,status,description,image,logo}) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}  
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}      
    whileHover={{ scale: 1.1 }}
    className="w-[290px] min-h-[380px] bg-slate-300/50 rounded-xl overflow-hidden flex flex-col items-center">
        <div className="w-full h-[140px] bg-slate-400 overflow-hidden">
            <img className="h-full w-full object-cover"/>
        </div>
        <h1>{title}</h1>
        <p>

        </p>
    </motion.div>
  )
}
export default ProjectCard