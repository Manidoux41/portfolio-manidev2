import React from "react";
import booki from "../assets/portfolio/booki.png";
import ohmyfood from "../assets/portfolio/ohmyfood.png";
import lapanthere from "../assets/portfolio/lapanthere.png";
import kanap from "../assets/portfolio/kanap.png";
import pikante from "../assets/portfolio/pikante.png";
import kasa from "../assets/portfolio/kasa.png";
import youhou from "../assets/portfolio/wikirocket.jpg"
import html from '../assets/technos/html.png';
import css from '../assets/technos/css.png'
import javascript from "../assets/technos/javascript.png";
import reactImage from "../assets/technos/reactJS.png";
import mongoDB from "../assets/technos/mongoDb.png";
import gitHubImage from "../assets/technos/gitHubImage.png";
import nodeJS from "../assets/technos/nodejs-1-logo.png";
import tailwind from "../assets/technos/tailwindcss.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: booki,
      demo: 'https://manidoux41.github.io/booki_v5/',
      code: 'https://github.com/Manidoux41/booki_v5.git', 
      technos: [html, css],
      description: "Intégration d'une maquette en html et css"
    },
    {
      id: 2,
      src: ohmyfood,
      demo: 'https://manidoux41.github.io/ohMyfood_v4/',
      code: 'https://github.com/Manidoux41/ohMyfood_v4.git',
      technos: [html, css, gitHubImage],
      description: "Dynamiser une page web avec des animation" 
    },
    {
      id: 3,
      src: lapanthere,
      demo: 'https://la-panthere-v3.vercel.app',
      code: 'https://github.com/Manidoux41/la_panthere_v3.git',
      technos: [html, css, gitHubImage],
      description: "Optimisation SEO d'un site web existant"                          
    },
    {
      id: 4,
      src: kanap,
      demo: 'https://front-p5.vercel.app',
      code: 'https://github.com/Manidoux41/back-p5.git',
      technos: [javascript, gitHubImage],
      description: "Construction d'un site e-commerce en javascript" 
    },
    {
      id: 5,
      src: pikante,
      demo: 'https://front-pikante.vercel.app',
      code: 'https://github.com/Manidoux41/Pikante_v4',
      technos: [html, css, mongoDB, nodeJS,gitHubImage],
      description: "Création d'une application web de location immobilière avec ReactJS" 
    },
    {
      id: 6,
      src: kasa,
      demo: 'https://kasa-v2.vercel.app',
      code: 'https://github.com/Manidoux41/kasa_v3.git',
      technos: [html, css, javascript,reactImage,gitHubImage],
      description: "Intégration d'une maquette en html et css" 
    },
    {
      id: 7,
      src: youhou,
      demo: 'https://wiki-rocket-gamma.vercel.app/',
      code: 'https://github.com/Manidoux41/wikiRocket.git', 
      technos: [html, css, javascript,reactImage,tailwind],
      description: "création d'un moteur de recherche basé sur wikipedia"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg py-10 px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className=" py-6">Vous trouverez ci-dessous les projets que j'ai réalisé au cours de ma dernière formation</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {portfolios.map(({ id, src,demo,code,description, technos }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt="kanap"
                className="object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} className=" bg-blue-600 text-center rounded-md w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:bg-blue" target='_blank'
            rel="noreferrer">
                  Demo
                </a>
                <a href={code} className=" bg-blue-600 text-center rounded-md w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:bg-blue" target='_blank'
            rel="noreferrer">
                  Code
                </a>
              </div>
              <div className="flex flex-col items-center p-4 w-full mx-auto">
                <p className="font-bold text-blue-300">Description et technos</p>
                <p className="py-2 text-center text-sm">{description}</p>
                <div className="flex justify-center gap-1">
                  {technos.map(tech => (
                    <img src={tech} alt="techno" className="h-4 w-4"/>
                  ))} 
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
