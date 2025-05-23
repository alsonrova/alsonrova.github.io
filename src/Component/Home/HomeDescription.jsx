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
        <h1 className="text-xl font-medium flex">I'm <TitleDynamical /></h1>
        <p>
          RANDRIA Rova, I'm a Web Developper since 3 years.
        </p>
        <p>
          Let me join you for the creation of your landing page, your personnal dashboard, your personnal blog or many else 
        </p>
        <p>
          I'm passionate with technology and helping people reaching their achievements. 
        </p>
    </motion.div>
  )
}
export default HomeDescription