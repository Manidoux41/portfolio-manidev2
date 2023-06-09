import React from "react";
import HeroImage from "../assets/images/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 lg:pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10 h-full px-4 md:flex-row">
        <div className="sm:w-1/2 flex flex-col justify-center h-full">
          <div className="text-4xl sm:text-7xl font-bold text-white">
          <span className="mr-4">Bonjour, je suis </span>
          <br />
          <TypeAnimation sequence={[
            "Dév web",
            2000,
            'Codeur',
            2000,
          ]} 
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity} /></div>
          <p className="text-gray-500 py-4  max-w-md">
          Après des années d'apprentissage en autodidacte, je viens de terminer le cursus de développeur web de Openclassroom qui me permet de décrocher un titre professionnel de catégorie V. J'ai fait mes classes avec PHP il y a 10 ans, cette formation me permet de maîtriser d'autres languages et frameworks. Ma devise: "Si d'autres l'ont fait, tu le peux"          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight  size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
