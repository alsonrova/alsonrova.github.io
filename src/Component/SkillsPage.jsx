import { useState } from "react"
import BackEndSkillsPage from "./SkillsPage/BackEndSkillsPage"
import OverallSkillsPage from "./SkillsPage/OverallSkillsPage"
import { motion } from "framer-motion"
import FrontEndSkillsPage from "./SkillsPage/FrontEndSkillsPage"
import SoftskillsSkillsPage from "./SkillsPage/SoftskillsSkillsPage"
import SoftwaresPage from "./SkillsPage/SoftwaresPage"

function SkillsPage() {
  const [selector,setSelector] = useState(0)
  const category = [
    {
      id:0,
      title:"Overall",
      component: <OverallSkillsPage />
    },
    {
      id:1,
      title:"Front End",
      component: <FrontEndSkillsPage />
    },
    {
      id:2,
      title:"Back End",
      component: <BackEndSkillsPage />
    },
    {
      id:3,
      title:"Gestion de projet",
      component: <OverallSkillsPage />
    },
    {
      id:4,
      title:"Logiciel",
      component: <SoftwaresPage />
    },
    {
      id:5,
      title:"Softskills",
      component: <SoftskillsSkillsPage />
    },

  ]

  function handleCategory(index){
    console.log("click")
    setSelector(index)
    console.log(selector)

  }
  
  return (
    <div className="w-screen h-[90vh] overflow-x-hidden">
      <h1 className="w-full text-2xl font-semibold text-center mt-2">
        Mes Skills
      </h1>
      <div className="w-full flex justify-center gap-10">
        {
          category.map((item,index)=>{
            return<div 
                  className="relative"
                  onClick={()=>handleCategory(index)}
                  >
                    {item.title}
                    {selector === index && (
                      <motion.div
                        className="absolute left-0 right-0 h-1 bg-blue-500/50 bottom-0 mx-auto rounded"
                        layoutId="underline"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
          })
        }
      </div>
      <motion.div className={`h-full flex`} 
        style={{
          width: `${100 * category.length}vw`,
        }}
        animate={{
          x: `-${selector * 100}vw`,
        }}
        transition={{
          duration: Math.abs(selector) * 0.1,
          ease: "easeInOut",
        }}
        >
        {
          category.map((item,index)=>{
            return item.component
          })
        }
      </motion.div>
    </div>
  )
}
export default SkillsPage