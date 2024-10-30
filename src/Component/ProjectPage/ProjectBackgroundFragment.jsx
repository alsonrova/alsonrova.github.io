import { motion } from "framer-motion"

function ProjectBackgroundFragment({src}) {
  return (
    <motion.div 
        className="w-16 h-16 invert"
        animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 0.5, // Durée aléatoire entre 0.5 et 2.5 secondes
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2, // Délai initial aléatoire
          }}
    >
        <img src={src} className="w-full h-full opacity-10 hover:opacity-20"/>
    </motion.div>
  )
}
export default ProjectBackgroundFragment