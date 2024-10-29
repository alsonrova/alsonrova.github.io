import { motion } from "framer-motion"
import TitleDynamical from "./TitleDynamical"
function HomeDescription() {
  return (
    <motion.div
        className="w-1/2 flex h-[90vh] flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }} 
        transition={{ duration: 0.2, ease: "easeOut" }} 
        
    >
        <h1 className="text-xl font-medium flex">Je suis un <TitleDynamical /></h1>
        <p>
          RANDRIA Rova Julio Alson, Développeur Fullstack Javascript et PHP
        </p>
        <p>
          Je peux travailler sur l'intégration de vos pages, l'implémentation de vos features les plus folles, 
        </p>
    </motion.div>
  )
}
export default HomeDescription