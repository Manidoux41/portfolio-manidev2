import html from "../assets/technos/html.png";
import css from "../assets/technos/css.png";
import javascript from "../assets/technos/javascript.png";
import reactImage from "../assets/technos/reactJS.png";
import mongoDB from "../assets/technos/mongoDb.png";
import gitHubImage from "../assets/technos/Github.png";
import tailwindcss from "../assets/technos/tailwindcss.png";
import nodeJS from "../assets/technos/nodejs-1-logo.png";
import php from "../assets/technos/php-logo.png";
import symfony from "../assets/technos/symfony.png";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwindcss,
      title: "TailwindCss",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mongoDB,
      title: "Mongo DB",
      style: "shadow-green-700",
    },
    {
      id: 7,
      src: gitHubImage,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: nodeJS,
      title: "Node JS",
      style: "shadow-green-800",
    },
    {
      id: 9,
      src: symfony,
      title: "Symfony",
      style: "shadow-black",
    },
    {
      id: 10,
      src: php,
      title: "PHP",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experiences"
      className="bg-gradient-to-b from-gray-800 to-black w-full :h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiences
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
