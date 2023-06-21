import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";

function Portfolio() {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
  ];

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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 "
              />
              <div className=" flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
