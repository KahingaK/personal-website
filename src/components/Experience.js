import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import ruby from "../assets/ruby.png";
import sql from "../assets/sql.png";

function Experience() {
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
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: ruby,
      title: "Ruby",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="container px-8 py-8 mx-auto p-4 flex flex-col justify-center w-full text-white ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-1">
            My Technologies
          </p>
          
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4"> {title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
