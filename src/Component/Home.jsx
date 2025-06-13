import HomeDescription from "./Home/HomeDescription"
import homeImage from "/assets/myroom.png"
import { motion } from "framer-motion"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim";
import { useMemo,useState,useEffect } from "react";

function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
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
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
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
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: { min: 0.3, max: 0.4}, // Valeur de base aléatoire
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false, // Chaque particule anime de façon indépendante
            },
          
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 3 },
        },
      },
      detectRetina: true,
      
    }),
    [],
  );
  return (
    <div className="h-[94vh] flex relative overflow-hidden">
      <motion.div 
      initial={{scale: 0.8,opacity:0.5,translateY:0.5}}
      animate={{scale: 1,opacity:1,translateY:1}}
      className="w-1/2 flex items-center justify-center relative z-20">
        <img className="lg:w-[500px] w-[300px] rounded-lg z-20"  src={homeImage}/>
        <motion.img 
         initial={{ scale: 1.05 }}
        animate={{ opacity: 1.09 }}
        className="lg:w-[500px] w-[300px] rounded-lg absolute translate-y-2 scale-105 blur-md " src={homeImage}/>
      </motion.div>
      <HomeDescription />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      
    </div>
  )
}
export default Home