import HomeDescription from "./Home/HomeDescription"
import homeImage from "/assets/myroom.png"
import symfony from "/assets/symfony.svg"
import { motion } from "framer-motion"
function Home() {
  return (
    <div
    className="h-[94vh] flex">
      <motion.div 
      initial={{scale: 0.8,opacity:0.5,translateY:0.5}}
      animate={{scale: 1,opacity:1,translateY:1}}
      className="w-1/2 flex items-center justify-center relative">
        <img className="lg:w-[500px] w-[300px] rounded-lg z-10"  src={homeImage}/>
        <motion.img 
         initial={{ scale: 1.05 }}
        animate={{ opacity: 1.09 }}
        className="lg:w-[500px] w-[300px] rounded-lg absolute translate-y-2 scale-105 blur-md " src={homeImage}/>
      </motion.div>
      <HomeDescription />
    </div>
  )
}
export default Home