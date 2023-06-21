import React from "react";
import HeroImage from "../assets/heroImage.png";
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-scroll";


function Home() {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" container mx-auto flex flex-col items-center justify-center py-24 md:flex-row">
        <div className=" px-8 flex flex-col justify-center h-full">
          <h2 className="pl-8 text-4xl sm:text-7xl font-bold text-white">
            I am a full stack developer
          </h2>
          <p className=" pl-8 text-gray-500 py-4 max-w-md">
            Highly motivated in web development with expertise in building and
            designing software. I love working on web applications using
            technologies like React, Tailwind, Ruby on Rails , and PostgreSQL.
          </p>
          <div className="pl-8">
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
