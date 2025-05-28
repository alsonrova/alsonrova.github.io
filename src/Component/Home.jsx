import HomeDescription from "./Home/HomeDescription"
import homeImage from "/assets/myroom.png"
import { motion } from "framer-motion"
import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function Home() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine)
    } catch (error) {
      console.error("Erreur lors de l'initialisation des particules:", error)
    }
  }, [])

  return (
    <div className="h-[100%] flex relative w-full">
      <motion.div 
        initial={{scale: 0.8,opacity:0.5,translateY:0.5}}
        animate={{scale: 1,opacity:1,translateY:1}}
        className="w-1/2 flex items-center justify-center relative">
        <img className="lg:w-[500px] w-[300px] rounded-lg z-10 drop-shadow-cyan-500/50" src={homeImage}/>
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ opacity: 1.09 }}
          className="lg:w-[500px] w-[300px] rounded-lg absolute translate-y-2 scale-105 blur-md" src={homeImage}/>
      </motion.div>
      <HomeDescription />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 0
            },
            background: {
              color: {
                value: "transparent",
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "star"
              },
              opacity: {
                value: 0.8,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 1,
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out"
                },
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              glow: {
                enable: true,
                color: "#ffffff",
                radius: 2
              },
              shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5,
                offset: {
                  x: 0,
                  y: 0
                }
              }
            }
          }}
        />
      </div>
    </div>
  )
}
export default Home