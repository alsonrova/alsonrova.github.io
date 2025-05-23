import investIcon from "/assets/investlocatif_icon.svg"
import investFullScreen from "/assets/investissementlocatifFullscreen.png"
import mathprepaIcon from "/assets/mathprepaIcon.png"
import mathprepaFullScreen from "/assets/mathprepaFullScreen.png"
import html from "/assets/html.svg"
import css from "/assets/css.svg"
import mysql from "/assets/mysql.svg"
import aws from "/assets/aws.svg"
import javascript from "/assets/javascript.svg"
import symfony from "/assets/symfony.svg"


const Project = [
    {
      id:0,
      title : "Investissement Locatif",
      url: "https://www.investissement-locatif.com/",
      status : "En ligne",
      description : ["An online platform that enables people to invest in property anywhere in France. ", "A range of services and professionals are put in touch with customers to help them make profitable investments."],
      image : investFullScreen,
      icon : investIcon,
      contribution : ["HTML/CSS Conversion","Fix design's bug","Front End Integration","Server-side development"],
      technology: [{ name:html, size:35 },{ name:css, size:35 },{ name:symfony, size:35 },{ name:mysql, size:70},{ name:aws, size:40 },{ name:javascript, size:30 }],
      duration:3,
      country:"fr"
    },
    {
      id:1,
      title : "MathPrepa",
      url: "https://www.math-prepa.fr/",
      status : "En ligne",
      description : ["Investissement Locatif est une marque déposée qui vise à aider les gens à integrer le monde de l'investissement immobilier.", "Grace à une plateforme pensé de A à Z pour ce besoin, elle "],
      image : mathprepaFullScreen,
      icon : mathprepaIcon,
      contribution : ["HTML/CSS Conversion","Fix design's bug","Front End Integration","Server-side development"],
      technology: [{ name:symfony, size:35 },{ name:mysql, size:70},{ name:aws, size:40 },{ name:javascript, size:30 }]
    }
  ]

export default Project