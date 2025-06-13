import investIcon from "/assets/investlocatif_icon.svg"
import investFullScreen from "/assets/investissementlocatifFullscreen.png"
import mathprepaIcon from "/assets/mathprepaIcon.png"
import mathprepaFullScreen from "/assets/mathprepaFullScreen.png"
import johnsonTravelIcon from "/assets/joshontravel.jpg"
import johnsonTravelFullScreen from "/assets/johsontravel_fullscreen.png"
import html from "/assets/html.svg"
import css from "/assets/css.svg"
import mysql from "/assets/mysql.svg"
import aws from "/assets/aws.svg"
import javascript from "/assets/javascript.svg"
import stripe from "/assets/stripe.svg"
import symfony from "/assets/symfony.svg"
import postgres from "/assets/postgresql.svg"
import django from "/assets/django.svg"



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
      technology: [{ name:symfony, size:35 },{ name:mysql, size:70},{ name:javascript, size:30 },{ name:stripe, size:40 }],
      duration:3,
      country:"fr"
    },
    {
      id:2,
      title : "Johson Travel Madagascar",
      url: "https://johnson-travel-madagascar.com/",
      status : "En ligne",
      description : ["Une agence de voyage qui propose des voyages en famille et en couple. Avec une large gamme de voiture de location."],
      image : johnsonTravelFullScreen,
      icon : johnsonTravelIcon,
      contribution : ["HTML/CSS Conversion","Fix design's bug","Front End Integration","Server-side development"],
      technology: [{ name:html, size:35 },{ name:css, size:35 },{ name:javascript, size:30 },{ name:django, size:30 },{ name:postgres, size:70 }],
      duration:3,
      country:"mg"
    }
  ]

export default Project