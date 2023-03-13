import React from "react";
import booki from "../assets/portfolio/booki.png";
import ohmyfood from "../assets/portfolio/ohmyfood.png";
import lapanthere from "../assets/portfolio/lapanthere.png";
import kanap from "../assets/portfolio/kanap.png";
import pikante from "../assets/portfolio/pikante.png";
import kasa from "../assets/portfolio/kasa.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: booki,
      demo: 'manidoux41.github.io/booki_v5/',
      code: 'https://github.com/Manidoux41/booki_v5.git', 
    },
    {
      id: 2,
      src: ohmyfood,
      demo: 'https://manidoux41.github.io/ohMyfood_v4/',
      code: 'https://github.com/Manidoux41/ohMyfood_v4.git', 
    },
    {
      id: 3,
      src: lapanthere,
      demo: 'https://la-panthere-v3.vercel.app',
      code: 'https://github.com/Manidoux41/la_panthere_v3.git', 
    },
    {
      id: 4,
      src: kanap,
      demo: 'https://front-p5.vercel.app',
      code: 'https://github.com/Manidoux41/back-p5.git', 
    },
    {
      id: 5,
      src: pikante,
      demo: 'https://front-pikante.vercel.app',
      code: 'https://github.com/Manidoux41/Pikante_v4', 
    },
    {
      id: 6,
      src: kasa,
      demo: 'https://kasa-v2.vercel.app',
      code: 'https://github.com/Manidoux41/kasa_v3.git', 
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt="kanap"
                className="object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
