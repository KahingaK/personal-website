import React from "react";
import cosmo from "../assets/portfolio/cosmo.jpg";
import feastable from "../assets/portfolio/feastable.jpg";
import { useState } from "react";



function Portfolio() {
 

  const projects = [
    {
      id: 1,
      src: cosmo,
      link: 'https://cosmoplan.netlify.app/',
      description: "The Cosmoplan website is a space for Cosmoplan consultant Architects to showcase to potential clients work done by the firm in the hope to improve visibility as well as push for better design practices within the building community"
    },
    {
      id: 2,
      src: feastable,
      link: 'https://feastable-front-end.vercel.app/',
      description: "FeastfulWorld is a mini web application that allows food lovers to browse, create, update and delete recipes to create a community food library."
    },
  ];
  const [showDescriptions, setShowDescriptions] = useState(
    Array(projects.length).fill(false)
  );

  const toggleDescription = (index) => {
    const updatedShowDescriptions = [...showDescriptions];
    updatedShowDescriptions[index] = !updatedShowDescriptions[index];
    setShowDescriptions(updatedShowDescriptions);
  };


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="container px-8 py-8 p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className=" py-6 ">Checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projects.map(({ id, src, link, description }, index) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 "
              />
              <div className=" flex items-center justify-center ">
                <button
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200"
                  onClick={() => toggleDescription(index)}
                >
                  <a href={link} target="_blank" rel="noreferrer">
                    demo
                  </a>
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200"
                  onClick={() => toggleDescription(index)}
                >
                  {showDescriptions[index] ? "Hide Description" : "Description"}
                </button>
              </div>
              {showDescriptions[index] && (
                <div className="p-4">{description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

