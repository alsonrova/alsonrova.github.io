import { motion,AnimatePresence  } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";

function ProjectModal({project,isShow,setIsShow}) {
  return (
    <AnimatePresence>
      {isShow && (
        <div className="w-screen h-screen fixed top-0 bg-black/30 overflow-hidden z-20 flex justify-center items-center text-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] lg:w-[1200px] h-[620px] bg-slate-100/60 backdrop-blur shadow rounded-sm rounded-ss-xl flex relative"
          >
            <motion.div
              whileHover={{ scale: 1.4 }}
              className="absolute top-3 right-4 text-2xl text-red-700 bg-slate-800/20 rounded-md cursor-pointer"
              onClick={() => setIsShow(false)}
            >
              <IoMdClose />
              <IoMdClose className="absolute top-0 animate-ping" />
            </motion.div>
            <div className="w-1/2 px-2 py-1">
              <h1 className="uppercase text-4xl flex items-center gap-2">
                <img src={project.icon} className="w-10 h-10 animate-pulse" alt="project icon"/>
                {project.title}
              </h1>
              <motion.a
                whileHover={{ scale: 1.1, x: 30 }}
                href={project.url}
                className="flex items-center gap-1 text-sm text-cyan-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm">{project.url}</p>
                <motion.p
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative"
                >
                  <FaExternalLinkAlt />
                </motion.p>
              </motion.a>
              <div className="h-2/5 text-zinc-800">
                {project.description}
              </div>
            </div>
            <div className="w-1/2"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
export default ProjectModal