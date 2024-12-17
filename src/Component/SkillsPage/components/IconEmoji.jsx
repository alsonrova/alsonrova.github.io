import { motion } from "framer-motion"
import { FaRegFrown, FaStarAndCrescent, FaStarOfDavid } from "react-icons/fa"
import { FaRegGrinBeamSweat } from "react-icons/fa"
import { FaRegGrinAlt } from "react-icons/fa"
import { FaRegGrinStars } from "react-icons/fa"
import { FaStar } from "react-icons/fa6"
import { GiStaryu } from "react-icons/gi"
import { PiGridFourLight } from "react-icons/pi"
import { PiStarFourFill } from "react-icons/pi";
function IconEmoji({rate,text}) {
    return (
        <h2 className="uppercase w-full flex items-center gap-1 ml-1 mb-1">
      {rate === 1 && (
        <motion.div
          initial={{ scale: 1,opacity:0.2 }}
          animate={{ scale: 1.05,  opacity:0.5}}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
        >
          <FaRegFrown className="inline rounded-lg bg-red-500 w-6 h-6 p-1" />
        </motion.div>
      )}
      {rate === 2 && (
        <motion.div
          initial={{ rotate: 0,scale:0.9,opacity:0.7 }}
          animate={{ rotate: 15,scale: 1 , opacity:0.9}}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
          }}
        >
          <FaRegGrinBeamSweat className="inline rounded-lg bg-yellow-500 w-6 h-6 p-1" />
        </motion.div>
      )}
      {rate === 3 && (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
          }}
        >
          <FaRegGrinAlt className="inline rounded-lg bg-lime-600 w-6 h-6 p-1" />
        </motion.div>
      )}
      {rate === 4 && (
        <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.3 }}
            transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.4,
            }}
            className="relative"
        >
          <FaRegGrinStars className="inline rounded-lg bg-emerald-500 w-6 h-6 p-1" />
          <div className="absolute top-0">
          <motion.div 
              initial={{
                scale:0.4,
                opacity:0.4
              }}
              animate={{
                scale:0.7,
                opacity:0.6
              }}
              transition={{
                repeat:Infinity
              }}
              className="absolute top-3 left-3">
              <PiStarFourFill/>
            </motion.div>
            <motion.div 
              initial={{
                scale:0.4,
                opacity:0.4
              }}
              animate={{
                scale:0.7,
                opacity:0.6
              }}
              transition={{
                repeat:Infinity
              }}
              className="absolute -top-1 -left-2">
              <PiStarFourFill/>
            </motion.div>
            <motion.div 
              initial={{
                scale:0.4,
                opacity:0.4
              }}
              animate={{
                scale:0.7,
                opacity:0.6
              }}
              transition={{
                repeat:Infinity
              }}
              className="absolute top-3 -left-2">
              <PiStarFourFill/>
            </motion.div>
            
          </div>
        </motion.div>
      )}
      {text}
    </h2>
    )  
    
}
export default IconEmoji